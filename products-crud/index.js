const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Middleware
app.use(express.json());

let products = [
    {id: 1, productName: "Watch", description: "Smart watch for men & women"},
    {id: 2, productName: "Laptop", description: "Rose gold themed Apple brand"},
];

let nextId = 3;

// CRUD Operations

// HTTP methods - GET, POST, PUT, DELETE

// GET API for products
app.get("/products", (req, res) => {
    // express function
    res.status(200).json(products);
})

// CREATE API
app.post("/products", (req, res) => {
    const {productName, description} = req.body;

    if(!productName || !description){
        return res.status(400).json({message: "Product name and description fields are required"});
    }

    const newProduct = {
        id: String(nextId++),
        productName,
        description
    };
    products.push(newProduct);
    res.status(201).json(products);
})

// UPDATE API  
app.put("/products/:id", (req, res) => {
    const {productName, description} = req.body;
    const {id} = req.params;

    const checkProducts = products.findIndex(data => data.id === Number(id));

    if(checkProducts === -1){
        return res.status(404).json({message: "Product not found"});
    }

    if(!productName && !description){
        return res.status(400).json({message: 'At least one field are required'});
    }
    products[checkProducts] = {
        ...products[checkProducts],
        ...(productName && {productName}),
        ...(description && {description})
    };
    res.status(200).json(products[checkProducts]);
});

// DELETE API
app.delete("/products/:id", (req, res) => {
    const {id} = req.params;

    const intialLength = products.length;
    products = products.filter(data => data.id !== Number(id));

    if(products.length === intialLength){
        return res.status(404).json({message: "Product not found"});
    }
    res.status(204).send();
})

// http"//localhost:3001/products

// Server code
app.listen(3001, () => {
    console.log("Server running");    
})