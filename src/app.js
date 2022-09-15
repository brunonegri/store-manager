const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routers/products.route');
const salesRouter = require('./routers/sales.route');

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use('/products', productsRouter);
app.use('/sales', salesRouter);
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo server.js para executar sua aplicação 
module.exports = app;