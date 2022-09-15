const { connection } = require('./connection');

const getAllSales = async () => {
  const query = `SELECT 
sale_id AS saleId, 
date, 
product_id AS productId, 
quantity
FROM StoreManager.sales_products AS sp
JOIN StoreManager.sales AS s
ON sp.sale_id = s.id
ORDER BY sale_id;`;
  const [result] = await connection.execute(query);
  return result;
};

const getSalesById = async (id) => { 
  const query = `SELECT 
date, 
product_id AS productId, 
quantity
FROM StoreManager.sales_products AS sp
JOIN StoreManager.sales AS s
ON sp.sale_id = s.id
WHERE sp.sale_id = ?;`;
  const [result] = await connection.execute(query, [id]);
  return result;
};

const createSales = async (date) => { 
  const query = 'INSERT INTO StoreManager.sales (name) VALUES(?);';
  const [{ insertId }] = await connection.execute(query, [date]);
  return insertId;
};

module.exports = {
  getAllSales,
  getSalesById,
  createSales,
};