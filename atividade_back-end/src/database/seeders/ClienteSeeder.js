const Cliente = require("../../models/Cliente");
const faker = require('faker-br');

const seedCliente = async function () {
  try {
    await Cliente.sync({ force: true });

    for (let i = 0; i < 10; i++) {
      await Cliente.create({
        nome: faker.name.firstName(),
        data_de_nascimento: faker.date.between(1990, 2004),
        cpf: faker.br.cpf(),
        email: faker.internet.email(),
        telefone: faker.phone.phoneNumber(),
        endereco: faker.address.city(),
      });
    }
  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedCliente;