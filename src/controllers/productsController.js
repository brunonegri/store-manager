const productServices = require('../services/productsServices');

const getAllProducts = async (req, res) => {
  const allProducts = await productServices.getAllProducts();
  return res.status(200).json(allProducts);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const productById = await productServices.getProductsById(id);
  if (!productById) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(productById);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  // if (!name) return res.status(400).json({ message: '"name" is required' });
    const newProduct = await productServices.createProduct(name);
    res.status(201).json(newProduct);
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
};