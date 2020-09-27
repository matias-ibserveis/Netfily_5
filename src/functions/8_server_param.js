
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    mayoromenor(num1: Int!, num2: Int): String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  mayoromenor: ({num1, num2}) => {
    let output = ''
    if (num1 > num2) output = 'el mayor es el primero'
    else output = 'el mayor es el segundo'
    
    return output
  }
};

var app = express();
module.exports.handler = serverless(app);

app.use(bodyParser.json());
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));


console.log('Running a GraphQL API server at http://localhost:8888/.netlify/functions/8_server_param');

