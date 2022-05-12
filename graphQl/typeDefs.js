const {GraphQLObjectType,GraphQLString} = require('graphql')

const userType = new GraphQLObjectType({
    name : 'users',
    description:'data of users',
    fields:()=>({
        firstName:{type:GraphQLString},
        lastName:{type:GraphQLString}
        // email :{type:GraphQLString},
        // password :{type:GraphQLString}
    })

})


module.exports = userType;