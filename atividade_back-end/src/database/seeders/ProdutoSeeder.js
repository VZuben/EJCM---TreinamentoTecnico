const Produto = require("../../models/Produto");
const faker = require('faker-br');

const seedProduto = async function () {
  try {
    await Produto.sync({ force: true });

    for (let i = 0; i < 10; i++) {
      await Produto.create({
        titulo: faker.commerce.productName(),
        descricao: faker.lorem.text(),
        nota: faker.random.number({ min: 0, max: 5 }),
        preco: faker.commerce.price(30, 3000, 2),
        quantidade: faker.random.number({ min: 1, max: 32 }),
        fotografia: faker.image.image(),
        fabricante: faker.company.companyName(),
      });
    }
  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedProduto;