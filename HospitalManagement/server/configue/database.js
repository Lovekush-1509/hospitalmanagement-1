const mongoose = require("mongoose");
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL || " mongodb+srv://lovekush2022ucb6052:aUaNUzkfgvsprchP@cluster0.bc5vn3g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

function databaseConnect(){
    mongoose.connect(DATABASE_URL,
      {useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() =>{
        console.log("DATABASE CONNECTED");
    }).catch((e) =>{
        console.log("DATABASE NOT CONNECTED");
    })
}

module.exports = databaseConnect;