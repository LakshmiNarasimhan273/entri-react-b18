const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    productprice: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
});

const Products = mongoose.model("products", productSchema);
module.exports = Products;