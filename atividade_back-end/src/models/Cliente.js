const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_de_nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
});

Cliente.associate = function(models) {
    Cliente.hasOne(models.Carrinho);
};

module.exports = Cliente;

