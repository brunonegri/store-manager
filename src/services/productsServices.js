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
  // const { error } = productsSchema.validate({ name });
  // if (error) {
  //   const objError = { status: 400, message: error.message };
  //   throw objError;
  // }
  const id = await productsModel.createProduct(name);
  return { id, name };
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
};