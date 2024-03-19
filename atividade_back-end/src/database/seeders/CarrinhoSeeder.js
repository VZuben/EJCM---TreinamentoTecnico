const Carrinho = require("../../models/Carrinho");
const faker = require('faker-br');

const seedCarrinho = async function () {
  try {
    await Carrinho.sync({ force: true });

    for (let i = 0; i < 10; i++) {
      await Carrinho.create({
        quantidade_de_produtos: faker.random.number({ min: 1, max: 10 }),
        preco_total: faker.commerce.price(30, 10000, 2),
      });
    }
  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedCarrinho;