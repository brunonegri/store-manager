const express = require('express');

const router = express.Router();
const salesController = require('../controllers/salesController');

router.get('/', salesController.getAllSales);

router.get('/:id', salesController.getSalesById);

router.post('/', salesController.createSales);

module.exports = router;