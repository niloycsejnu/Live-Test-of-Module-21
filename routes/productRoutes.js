//This section have productRoutes.js file code
const express = require('express');
const productModel = require('../models/productModel');
const router = express.Router();

// Create a new product
router.post('/create', async (req, res) => {
    try {
        const product = new productModel(req.body);
        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
    }
});

// Read a single product by ID
router.get('/:id', async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error });
    }
});

// Update a product by ID
router.put('/update/:id', async (req, res) => {
    try {
        const product = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error updating product', error });
    }
});

// Delete a product by ID
router.delete('/delete/:id', async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
});

module.exports = router;

//--------------------------------------------------------------------------------