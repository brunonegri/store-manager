const { connection } = require('./connection');

const getAllProducts = async () => {
  const query = 'SELECT id,name FROM StoreManager.products;';
  const [result] = await connection.execute(query);
  return result;
};

const getProductsById = async (id) => { 
  const query = 'SELECT id,name FROM StoreManager.products WHERE id = ?;';
  const [result] = await connection.execute(query, [id]);
  return result[0];
};

const createProduct = async (name) => { 
  const query = 'INSERT INTO StoreManager.products (name) VALUES(?);';
  const [{ insertId }] = await connection.execute(query, [name]);
  return insertId;
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
};