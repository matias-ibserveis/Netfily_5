/* GraphiQL:  
{
  hello
}
*/

/* 
POST /graphql HTTP/1.1
Host: localhost:4000
Content-Type: application/json
{
    "query": "{  hello }"
}

*/


//  Gracias a POSTMAN:  (code)

var axios = require('axios');
var data = JSON.stringify({"query":"{  hello }"});

var config = {
  method: 'post',
  url: 'http://localhost:4000/graphql',
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

  