const express = require("express");
const app = express();
app.use(express.json());

const cookieParser = require("cookie-parser");

require("dotenv").config();
const cors = require("cors");
const databaseConnect = require("./configue/database");
const routes = require("./routes/user");

databaseConnect();

app.use(cors({
    origin:[
    "https://hospitalmanagement-1.vercel.app",
    "https://hospitalmanagement-1-git-main-fortesting1509-gmailcoms-projects.vercel.app",
    "https://hospitalmanagement-1-1se0hpamb.vercel.app"
  ],
    credentials:true,
}));

app.use(cookieParser());

app.use('/hms',routes);

app.get('/',(req,res) =>{
    res.send("Hello,Server is Running")
})


const PORT = process.env.PORT || 4000;
app.listen(PORT,() =>{
    console.log("Server Listening at:",PORT);
});


// http://localhost:4000/hms