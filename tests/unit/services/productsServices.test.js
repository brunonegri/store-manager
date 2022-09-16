const sinon = require('sinon')
const { expect } = require('chai')

const productsServices = require('../../../src/services/productsServices')
const productsModel = require('../../../src/models/productsModel')
const mock = require('../models/mockModel')
describe('Test getAllProducts function services', () => {
  before(async () => {
    sinon.stub(productsModel, 'getAllProducts').resolves(mock.allProducts)
  })
  
  after(async () => {
    productsModel.getAllProducts.restore();
  })
  it('[Services] Should return all products', async () => {
    const result = await productsServices.getAllProducts()
    expect(result).to.be.deep.equal(mock.allProducts)
  })
})

describe('Test getProductsById function services', () => {
  before(async () => {
    sinon.stub(productsModel, 'getProductsById').resolves(mock.oneProduct)
  })
  
  after(async () => {
    productsModel.getProductsById.restore();
  })
  it('[Services] Should return a product with ID requested', async () => {
    const [result] = await productsServices.getProductsById(3)
    expect(result).to.be.deep.equal(mock.allProducts[2])
  })
})

describe('Test getProductsById function services', () => {
  before(async () => {
    sinon.stub(productsModel, 'getProductsById').resolves(mock.allProducts[5])
  })
  
  after(async () => {
    productsModel.getProductsById.restore();
  })
  it('[Services] Should return a null', async () => {
    const result = await productsServices.getProductsById(6)
    expect(result).to.be.equal(null)
  })
})

describe('Test createProduct function services', () => {
  before(async () => {
    sinon.stub(productsModel, 'createProduct').resolves(4)
  })
  
  after(async () => {
    productsModel.createProduct.restore();
  })
  it('[Services] Should return new product ID', async () => {
    const result = await productsServices.createProduct('SuperItem')
    expect(result).to.be.deep.equal({type: 201, message: 4})
  })
})

describe('Test createProduct function services', () => {
  before(async () => {
    sinon.stub(productsModel, 'createProduct').resolves(4)
  })
  
  after(async () => {
    productsModel.createProduct.restore();
  })
  it('[Services] Should return name requirement message', async () => {
    const result = await productsServices.createProduct()
    expect(result).to.be.deep.equal({type: 400, message: '"name" is required'})
  })
})

describe('Test createProduct function services', () => {
  before(async () => {
    sinon.stub(productsModel, 'createProduct').resolves(4)
  })
  
  after(async () => {
    productsModel.createProduct.restore();
  })
  it('[Services] Should return length requirement message', async () => {
    const result = await productsServices.createProduct('Abc')
    expect(result).to.be.deep.equal({type: 422, message: '"name" length must be at least 5 characters long'})
  })
})