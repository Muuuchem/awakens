import axios from 'axios';

async function genomeLink() {

//   return axios.get("https://genomicexplorer.io/oauth/authorize?redirect_uri=http://127.0.0.1:5000/callback&client_id=ACkyELWzOItMLBaG6qsJ9Ew7z4uTKa9EJw6kNuWq&response_type=code&scope=report:eye-color",
//   {
//   method: 'GET',
//         // headers: {
//         //   'Access-Control-Allow-Origin': '*',
//         //   'Accept': 'application/x-www-form-urlencoded',
//         //   'Content-Type': 'application/x-www-form-urlencoded',
//         // },
//         // mode: 'no-cors',
//       }
// ).then((req, res) => {
//   console.log(req);
//   // return req.data.render;
//   // res.send(req.data);
// });

    await fetch('http://127.0.0.1:3000/', {
          method: 'GET',
                // headers: {
                //   'Access-Control-Allow-Origin': '*',
                //   'Accept': 'application/x-www-form-urlencoded',
                //   'Content-Type': 'application/x-www-form-urlencoded',
                // },
                // mode: 'no-cors',
              }

    ).then((response) => {
      response.json().then((final) => {
        console.log(final);
        window.location.assign(final.authorize_url);
      })
    })
            //  console.log(data.json());
            //  debugger
            //  return data.then((res) => {
            //     console.log(res);
            // });
            // window.location.assign(data.data);

}

export default genomeLink;
