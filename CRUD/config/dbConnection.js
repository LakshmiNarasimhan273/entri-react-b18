const mongoose = require("mongoose");

async function dbConnection(){
    try{
        await mongoose.connect("mongodb://localhost:27017/mern-ecommerce");
        console.log("DB Connected");        
    }catch(err){
        console.error(err);        
    }
}
module.exports = dbConnection;