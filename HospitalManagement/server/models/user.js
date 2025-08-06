const mongoose = require("mongoose");
const Appointment = require("./appointment");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    appointment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Appointment"
    }],

    token:{
        type:String,
    }
});

const user = mongoose.model("User",userSchema);
module.exports = user;