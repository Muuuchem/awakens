import axios from 'axios';

async function genomeLink() {
    await fetch('http://127.0.0.1:3000/genomelink/oauth', { method: 'GET'})
      .then((response) => {
        console.log(response);
      response.json().then((final) => {
        console.log(final);
        window.location.assign(final.authorize_url)
      });
    }, err => {
      alert(err);
    });
}

export default genomeLink;
