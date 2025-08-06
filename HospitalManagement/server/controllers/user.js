const User = require("../models/user")
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.SignUp = async(req,res) =>{
    try{
        console.log("hello jii")
        const {age,name,email,password} = req.body;
        const isUserExist = await User.findOne({email:email});
        if(isUserExist){
            return res.json({
                success:false,
                message:"User Already Exist"
            });
        }

        // we just storing the password, we're not gonna hash password for small task
        const newUser = new User({age,name,email,password});
        const userAdded = await newUser.save();
        if(!userAdded){
            return res.json({
                success:false,
                message:"Something Went Wrong Plz Try Again Later",
            });
        }

        return res.json({
            success:true,
            message:"Sign Up Successfully",
            user:userAdded,
        });


    }catch(e){
        res.json({
            succcess:false,
            message:e.message,
            where:"Inside catch",
        })
    }
}




exports.LogIn = async(req,res) =>{
    try{
        const {email,password} = req.body;
        console.log("aa gay login me")
        const isUserExist = await User.findOne({email:email});
        if(!isUserExist){
            return res.json({
                success:false,
                message:"User Not Found, SignUp First",
            });
        }

        if(password !== isUserExist.password){
            return res.json({
                success:false,
                message:"Password Not Matched",
            });
        }

        const payload = {
            email:isUserExist.email,
            id:isUserExist._id,
        }

        const token = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"5h"
        });
        isUserExist.token = token;
        console.log("user data inside login:",isUserExist);
        const options = {
            expires:new Date(Date.now()+5*60*60*1000),
            httpOnly:true,
            secure: true,
            sameSite: "None",
        }
        res.cookie("token",token,options)
        .header('Authorization',token);
        console.log("res:",res);
        return res.json({
            success:true,
            message:"Logged In Successfully",
            data:isUserExist,
            token:token,
        });     

    }catch(e){
        return res.json({
            success:false,
            message:e.message,
        })
    }
}