const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphQl/query')
const signedUser = require("./database/db");

app.use(express.json())
const root = {
    dbConfig : signedUser
}
app.use('/graphql',graphqlHTTP({
    schema ,
    rootValue : root,
    graphiql:true
}))



app.listen(3000,()=>{
    console.log('started @3000')
})