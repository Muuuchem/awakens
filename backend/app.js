import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import session from 'express-session';
import {client_secret, client_id, callback_url} from './client.js';


const app = express();
// app.use(cors({origin: 'http://localhost:3000'}));
const middlewareConfig = mid => {
  mid.use(morgan('dev'));
  mid.use(bodyParser.json());
  mid.use(bodyParser.urlencoded({
    extended: true
  }));
};

middlewareConfig(app);

app.use(session({
    secret: client_secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 18000
    }
}));

app.get('/reports', async (req, res) => {
    const scope = 'report:Iron';
    const authorizeUrl = genomeLink.OAuth.authorizeUrl({scope: scope})

    let reports = [];

    if (req.session.oauthToken) {
        const scopes = scope.split(' ');

        reports = await Promise.all(scopes.map( async (name) => {
            return await genomeLink.Report.fetch({
                name: name.replace(/report:/g, ''),
                population: 'european',
                token: req.session.oauthToken
            });
        }));
    }

    res.send(reports)
})

app.get('/callback', async (req, res) => {

    req.session.oauthToken = await genomeLink.OAuth.token({ requestUrl: req.url })
    res.
})