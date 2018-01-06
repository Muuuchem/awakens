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

    const data = await fetch('http://127.0.0.1:5000/', {
          method: 'GET',
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Accept': 'application/x-www-form-urlencoded',
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                mode: 'no-cors',
              }

             )
            //  console.log(data);
            //  return data.then((res) => {
            //     console.log(res);
            // });
            // window.location.assign(data);

}

export default genomeLink;
