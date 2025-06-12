const express = require("express");
const app = express();

const dbConnection = require("./config/dbConnection");

dbConnection();

app.listen(3001, () => {
    console.log("Server up and running");    
});