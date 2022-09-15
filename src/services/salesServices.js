const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();
  return allSales;
};

const getSalesById = async (id) => {
  const saleById = await salesModel.getSalesById(id);
  if (!saleById) return null;
  return saleById;
};

const createSales = async (name) => {
  if (!name) return { type: 400, message: '"name" is required' };
  if (name.length < 5) {
    return { type: 422, message: '"name" length must be at least 5 characters long' }; 
  } 

  const id = await salesModel.createSales(name);
  const newProduct = {
    id,
    name,
  }; 
  return { newProduct };
};

module.exports = {
  getAllSales,
  getSalesById,
  createSales,
};