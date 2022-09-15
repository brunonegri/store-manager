const salesServices = require('../services/salesServices');

const getAllSales = async (req, res) => {
  const allSales = await salesServices.getAllSales();
  return res.status(200).json(allSales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const saleById = await salesServices.getSalesById(id);
  console.log(saleById);
  if (saleById.length < 1) return res.status(404).json({ message: 'Sale not found' });
  res.status(200).json(saleById);
};

const createSales = async (req, res) => {
  const { name } = req.body; 
  const { newProduct, type, message } = await salesServices.createSales(name);
  if (message) {
    return res.status(type).json({ message });
  }
    res.status(201).json(newProduct);
};

module.exports = {
  getAllSales,
  getSalesById,
  createSales,
};