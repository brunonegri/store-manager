const sinon = require('sinon')
const { expect } = require('chai')

const productsModel = require('../../../src/models/productsModel')
const {connection} = require('../../../src/models/connection')
const mock = require('./mockModel')

describe('Testes na camada model', () => {
  before(async () => {
    sinon.stub(connection, 'execute').resolves([mock.allProducts])
  })
  
  after(async () => {
    connection.execute.restore();
  })
  it('Get Products', async () => {
    const result = await productsModel.getAllProducts()
    expect(result).to.be.deep.equal(mock.allProducts)
  })
})