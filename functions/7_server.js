
//event-based programming node
// https://www.valentinog.com/blog/event/

// Teoria Async
// https://blog.logrocket.com/evolution-async-programming-javascript/

// GraphQL
// https://httptoolkit.tech/blog/simple-graphql-server-without-apollo

// https://graphql.org/graphql-js/running-an-express-graphql-server/

var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const serverless = require("serverless-http");
const bodyParser = require("body-parser");


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
module.exports.handler = serverless(app);

app.use(bodyParser.json());
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
//app.listen(8888);
console.log('Running a GraphQL API server at http://localhost:8888/.netlify/functions/7_server');