const express = require("express");
const app = express();
const Products = require("./model/Product");
const dbConnection = require("./config/dbConnection");
const User = require("./model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Middleware for accepting a json data from postman (or) frontend
app.use(express.json());

const jwt_key = "LakshmiNarasimhan";

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

// Authentication API's
// 1) Register API(signup)
app.post("/auth/register", async(req, res) => {
    const{email, password} = req.body;

    try{
        // using findOne method to check the email is already register or not
        const emailCheck = await User.findOne({email});
        if(emailCheck){
            return res.status(400).json({message: "User account already found"});
        }
        // password hashing process - use bcrypt.hash method with salt number (10)
        // it will hash our password and process it as a random string
        // narasimhan@123 - 3n1j32n123@nqnwjfnqwer$ (hashing process)
        const hashedPassword = await bcrypt.hash(password, 10);

        // receive the processed data and save it our collection
        const user = new User({email, password: hashedPassword});
        await user.save();
        res.status(201).json({message: "User registered successfully"});

    }catch(err){
        console.error(err);        
    }
});

// 2) Login API(signin)
app.post("/auth/login", async(req, res) => {
    const{email, password} = req.body;

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({message: "Password mismatch"});
        }
        // Generate JWT
        const token = jwt.sign(
            {userId: user._id},
            jwt_key,
            {expiresIn: '1h'}
        )
        res.status(200).json({message: "Login successful", token})
    }catch(err){
        console.error(err);        
    }
})

app.listen(3001, () => {
    dbConnection();
    console.log("Server up and running");
});