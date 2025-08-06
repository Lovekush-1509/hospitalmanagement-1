const mongoose = require("mongoose");


const appointmentSchema = mongoose.Schema({
    date:{
        type:String,
        required:true,
    },
    slot:{
        type:String,
        enum:["1","2","3"],
        required:true,
    },
});

const appointment = mongoose.model("Appointment",appointmentSchema);
module.exports = appointment;