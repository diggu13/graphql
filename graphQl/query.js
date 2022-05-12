
const {GraphQLObjectType,GraphQLList} = require('graphql');
const signedUser = require("../database/db");
const {GraphQLSchema} = require('graphql')
const userType = require('./typeDefs')
const user = require('./mutations')
const deleteUser = require('./mutations')
const update = require('./mutations')

const RootQuery = new GraphQLObjectType({
    name:'query',
    fields : ()=>({
        userlist : {
            type : new GraphQLList(userType),
            resolve : (parent,args)=>{
                const dbb =  signedUser.find();
                return dbb
            }
        }
    })
})
const Mutation = new GraphQLObjectType({
    // if u want to use this mutation go to typedef file and comment out other types except username
    name : 'mutation',  
    fields : {
        createUser : user,
        deleteUser : deleteUser,
        updateUser : update
    }
})
const schema = new GraphQLSchema({query:RootQuery,mutation:Mutation})

module.exports = schema