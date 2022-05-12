
const { GraphQLString } = require('graphql');
const userType = require('./typeDefs')

const user = {
    type: userType,
    args : {
        firstName : {type:GraphQLString},
        lastName:{type:GraphQLString},
        password : {type:GraphQLString},
        email:{type:GraphQLString}
    },
    resolve : (parent,args)=>{
            const add = parent.dbConfig.create(args)
            return add
    }
}
const deleteUser = {
    type : userType,
    args : {
        firstName : {type:GraphQLString}
    },
    resolve : (parent,args)=>{
            const add = parent.dbConfig.findOneAndDelete({
                firstName: args.firstName
            })
            return add
    }
}
const update = {
    type : userType,
    args : {
        firstName : {type:GraphQLString},
        lastName:{type:GraphQLString}
    },
    resolve : (parent,args)=>{
            const add = parent.dbConfig.updateOne({
                firstName:args.firstName
            },{
                $set:{
                    firstName: args.firstName,
                    lastName:args.lastName
                }
                
            })
            return add
    }
}
module.exports = user;
module.exports = deleteUser;
module.exports = update;