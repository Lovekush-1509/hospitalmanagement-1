const Appointment = require('../models/appointment');
const User = require('../models/user');

exports.addAppointment = async(req,res) =>{
    try{
        const {date,slot} = req.body;
        // const dateofAppointment = date;
        const userId = req.user.id;
        const newAppointment = new Appointment({date,slot});
        const savedAppointment = await newAppointment.save();
        const appointmentSet = await User.findByIdAndUpdate({_id:userId},{$push:{appointment:savedAppointment._id}},{new:true});
        if(!savedAppointment || !appointmentSet){
            return res.json({
                success:false,
                message:"data not saved",
            });
        }

        return res.json({
            success:true,
            message:"Add Appointment Successfully",
        })
    }catch(e){
            return res.json({
                success:false,
                message:e.message,
            });
    }
}


exports.getAppointment = async(req,res) =>{
    try{
        // console.log(req)
        const userId = req.user.id;
        const allAppointments = await User.findById(userId).populate("appointment");
        if(!allAppointments){
            return res.json({
                success:false,
                message:"No Appointment fetched",
            });
        }

        return res.json({
            success:true,
            data:allAppointments,
            message:"Appointment fetched Successfully",
        })
    }catch(e){
            return res.json({
                success:false,
                message:e.message,
            });
    }
}