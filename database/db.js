const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://Mongoose:Mongoose@cluster0.rzkjz.mongodb.net/signinloginform?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

const usersSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true
    },
    lastName : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        lowercase : true,
        unique: true
    }
})

const Usercollection = new mongoose.model("user",usersSchema);

module.exports = Usercollection;