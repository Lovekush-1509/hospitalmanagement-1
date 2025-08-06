const express = require("express");
const router = express.Router();

const {
    auth
} = require("../middleware/auth");

const {
    LogIn,
    SignUp
} = require("../controllers/user");


const {
    getAppointment,
    addAppointment,
} = require("../controllers/appointment")

router.post("/user/signup",SignUp);
router.post("/user/login",LogIn);

router.post('/user/makeApt',auth,addAppointment);
router.get('/user/getApt',auth,getAppointment);


module.exports = router;