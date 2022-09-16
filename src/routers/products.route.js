const express = require('express');

const router = express.Router();
const productsController = require('../controllers/productsController');
const validates = require('../middlewares/validateName');

router.get('/', productsController.getAllProducts);

router.get('/:id', productsController.getProductsById);

router.post('/', productsController.createProduct);

router.put('/:id', validates.validateName, productsController.updateProduct);

module.exports = router;