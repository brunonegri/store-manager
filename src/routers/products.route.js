const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/products', productsController.getAllProducts);

router.get('/products/:id', productsController.getProductsById);

module.exports = router;