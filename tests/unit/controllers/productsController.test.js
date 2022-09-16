const sinon = require('sinon')
const { expect } = require('chai')

const productsController = require('../../../src/controllers/productsController')
const productsServices = require('../../../src/services/productsServices')
const mock = require('../models/mockModel')
describe('Test getAllProducts function controller', () => {
  const req = {}
  const res = {}

  res.status = sinon.stub().returns(res)
  res.json = sinon.stub().returns()

  before(async () => {
    sinon.stub(productsServices, 'getAllProducts').resolves(mock.allProducts)
  })
  
  after(async () => {
    productsServices.getAllProducts.restore();
  })
  it('[Controller] Should return all products', async () => {
    
    await productsController.getAllProducts(req, res)
    expect(res.status.calledWith(200)).to.be.equal(true)
  })
})

describe('Test getProductsById function controller', () => {
  const res = {}
  const req = { params: {id: 1}, body: {}}

  res.status = sinon.stub().returns(res)
  res.json = sinon.stub().returns()

  before(async () => {
    sinon.stub(productsServices, 'getProductsById').resolves(mock.oneProduct)
  })
  
  after(async () => {
    productsServices.getProductsById.restore();
  })
  it('[Controller] Should return a product with ID requested', async () => {
    
    await productsController.getProductsById(req, res)
    expect(res.status.calledWith(200)).to.be.equal(true)
  })
})

describe('Test getProductsById function controller', () => {
  const res = {}
  const req = { params: {id: 50}, body: {}}

  res.status = sinon.stub().returns(res)
  res.json = sinon.stub().returns()

  before(async () => {
    sinon.stub(productsServices, 'getProductsById').resolves(null)
  })
  
  after(async () => {
    productsServices.getProductsById.restore();
  })
  it('[Controller] Should not return any product with ID requested', async () => {
    
    await productsController.getProductsById(req, res)
    expect(res.status.calledWith(404)).to.be.equal(true)
  })
})

describe('Test createProduct function controller', () => {
  const res = {}
  const req = { body: { name: 'SuperItem'}}

  res.status = sinon.stub().returns(res)
  res.json = sinon.stub().returns()

  before(async () => {
    sinon.stub(productsServices, 'createProduct').resolves({ type: 201, message: 4 })
  })
  
  after(async () => {
    productsServices.createProduct.restore();
  })
  it('[Controller] Should return a new product', async () => {
    
    await productsController.createProduct(req, res)
    expect(res.status.calledWith(201)).to.be.equal(true)
  })
})

describe('Test createProduct function controller', () => {
  const res = {}
  const req = {body: { name: 'test'}}

  res.status = sinon.stub().returns(res)
  res.json = sinon.stub().returns()

  before(async () => {
    sinon.stub(productsServices, 'createProduct').resolves({ type: 422, message: '"name" length must be at least 5 characters long' })
  })
  
  after(async () => {
    productsServices.createProduct.restore();
  })
  it('[Controller] Should return a requirement message', async () => {
    await productsController.createProduct(req, res)
    expect(res.status.calledWith(422)).to.be.equal(true)
  })
})
