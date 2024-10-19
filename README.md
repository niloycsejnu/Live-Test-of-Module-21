# Niloy Datta
- Live Test 04 of Module-21
- Ostad Mern Batch 06

# Language
- ExpressJS
- Javascript
# DataBase
- Mongodb
# Platform
- NodeJS
# Testing Tool
- Postman

# Practice
- For my live test submission and personal practice
   
# Task
Following is a schema model given below. 

const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String },
    short_des: { type: String },
    price: { type: Number },
    discount: { type: Number },
    image: { type: String },
    stock: { type: String },
    star: { type: String },
    remark: { type: String },
  },
  
  {
    versionKey: false,
    timestamps: true,
  }
);

const productModel = mongoose.model("products", DataSchema);

module.exports = productModel;

# Requirements:  
- Now generate the codes on how to Create a product.
- Generate the codes for how to Read the data of a single product.
- Generate codes on how to Delete a product based on a specific ID.
- Generate codes on how to Update a product based on a specific ID.
