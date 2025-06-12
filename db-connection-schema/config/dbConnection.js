const mongoose = require("mongoose");

async function dbConnection(){
    try {
        await mongoose.connect("mongodb://localhost:27017/live-session");
        console.log("DB Connected");        
    } catch (error) {
        console.error(error);        
    }
}

module.exports = dbConnection;