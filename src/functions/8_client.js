
// Información a partir de  {mayoromenor(num1: 6, num2: 5)}
// dentro del body del post y con ayuda de Postman (code)

/*
POST /graphql HTTP/1.1
Host: localhost:4000
Content-Type: application/json

{
    "query": "{ mayoromenor(num1: 4, num2: 5) }"
}

*/

/*  CURL
curl --location --request POST 'http://localhost:4000/graphql' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": "{ mayoromenor(num1: 4, num2: 5) }"
}'

*/

var axios = require('axios');
var data = JSON.stringify({"query":"{ mayoromenor(num1: 4, num2: 5) }"});

var config = {
  method: 'post',
  url: 'http://localhost:8888/.netlify/functions/8_server_param',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

/*
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
*/

async function init (){
  try {
    const respuesta = await axios(config)
    console.log(JSON.stringify(respuesta.data))
  }    
  catch (e){
    console.log("el error es:" , e)
  }
}

init();