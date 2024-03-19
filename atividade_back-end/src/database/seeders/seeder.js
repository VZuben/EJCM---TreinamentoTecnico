require('../../config/dotenv')();
require('../../config/sequelize');

const seedCarrinho = require('./CarrinhoSeeder');
const seedCliente = require('./ClienteSeeder');
const seedLoja = require('./LojaSeeder');
const seedProduto = require('./ProdutoSeeder');

(async () => {
  try {
    await seedCarrinho();
    await seedCliente();
    await seedLoja();
    await seedProduto();

  } catch (err) {
    console.log(err);
  }
})();
