// const Joi = require('joi');
const productsModel = require('../models/productsModel');

// const productsSchema = Joi.object({
//   id: Joi.number().required(),
//   name: Joi.string().min(5).max(30).required(),
// });

const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();
  return allProducts;
};

const getProductsById = async (id) => {
  const productById = await productsModel.getProductsById(id);
  if (!productById) return null;
  return productById;
};

const createProduct = async (name) => {
  if (!name) return { type: 400, message: '"name" is required' };
  if (name.length < 5) {
    return { type: 422, message: '"name" length must be at least 5 characters long' }; 
  } 
  const id = await productsModel.createProduct(name);
  return { type: 201, message: id };
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
};