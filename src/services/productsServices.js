const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const allProducts = await productsModel.getAllProducts();
  return allProducts;
};

const getProductsById = async (id) => {
  const productById = await productsModel.getProductsById(id);
  if (!productById) return null;
  return productById;
};

module.exports = {
  getAllProducts,
  getProductsById,
};