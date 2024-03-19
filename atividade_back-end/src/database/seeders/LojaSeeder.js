const Loja = require("../../models/Loja");
const faker = require('faker-br');

const seedLoja = async function () {
  try {
    await Loja.sync({ force: true });

    for (let i = 0; i < 10; i++) {
      await Loja.create({
        nome: faker.company.companyName(),
        email: faker.internet.email(),
        telefone: faker.phone.phoneNumber(),
        endereco: faker.address.city(),
      });
    }
  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedLoja;