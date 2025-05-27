// Basic server creation
const express = require("express");

const app = express();

// api routes
app.get("/message", (req, res) => {
    res.send("Welcome to node development");
});

app.get("/users", (req, res) => {
    res.send("User directory")
})

// server listening code
app.listen(8080, () => {
    console.log("Server running");
})

// http://localhost:8080/message