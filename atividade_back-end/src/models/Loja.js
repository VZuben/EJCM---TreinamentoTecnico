const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Loja = sequelize.define('Loja', {
    nome: {
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
        allowNull: false
    }
}, {
    timestamps: false
});

Loja.associate = function(models) {
    Loja.hasMany(models.Produto);
};

module.exports = Loja;