const express = require("express");
const app = express();
const Products = require("./model/Product");
const dbConnection = require("./config/dbConnection");

// Middleware for accepting a json data from postman (or) frontend
app.use(express.json());

// CRUD API's

// POST API
app.post("/products", async (req, res) => {
    try {
        // Creating a data into mongodb collection - insertOne
        const newProduct = await Products.create(req.body);
        res.status(201).json(newProduct);
    } catch (err) {
        console.error(err);
    }
});

// GET API
app.get("/products", async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (err) {
        console.error(err);
    }
})

// UPDATE API
app.put("/products/:id", async (req, res) => {
    try {
        // findByIdAndUpdate - updateOne
        const updatedProducts = await Products.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true });
        res.status(200).json(updatedProducts);
    } catch (err) {
        console.error(err);
    }
})

// DELETE API
app.delete("/products/:id", async (req, res) => {
    try{
        // findByIdAndDelete - deleteOne
        await Products.findByIdAndDelete(req.params.id);
        res.json({message: "Product deleted"});
    }catch(err){
        console.error(err);        
    }
})

app.listen(3001, () => {
    dbConnection();
    console.log("Server up and running");
});