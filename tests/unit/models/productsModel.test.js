const sinon = require('sinon')
const { expect } = require('chai')

const productsModel = require('../../../src/models/productsModel')
const {connection} = require('../../../src/models/connection')
const mock = require('./mockModel')

describe('Test getAllProducts function', () => {
  before(async () => {
    sinon.stub(connection, 'execute').resolves([mock.allProducts])
  })
  
  after(async () => {
    connection.execute.restore();
  })
  it('[Model] Should return all Products', async () => {
    const result = await productsModel.getAllProducts()
    expect(result).to.be.deep.equal(mock.allProducts)
  })
})
describe('Test getProductsById function', () => {
  before(async () => {
    sinon.stub(connection, 'execute').resolves([mock.oneProduct])
  })
  
  after(async () => {
    connection.execute.restore();
  })
  it('[Model] Should return one product with same ID', async () => {
    const result = await productsModel.getProductsById(3)
    expect(result).to.be.deep.equal(mock.allProducts[2])
  })
})

describe('Test createProduct function', () => {
  before(async () => {
    sinon.stub(connection, 'execute').resolves([{insertId: 4}])
  })
  
  after(async () => {
    connection.execute.restore();
  })
  it('[Model] Should return new product ID :4', async () => {
    const result = await productsModel.createProduct('SuperItem')
    expect(result).to.be.deep.equal(4)
  })
})