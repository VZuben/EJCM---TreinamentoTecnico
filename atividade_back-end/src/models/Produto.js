const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Produto = sequelize.define('Produto', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nota: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    preco: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fotografia: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fabricante: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

Produto.associate = function(models) {
    Produto.belongsTo(models.Carrinho);
    Produto.belongsTo(models.Loja);
};

module.exports = Produto;