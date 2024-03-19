const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Carrinho = sequelize.define('Carrinho', {
    quantidade_de_produtos: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco_total: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    timestamps: false
});

Carrinho.associate = function(models) {
    Carrinho.belongsTo(models.Cliente);
    Carrinho.hasMany(models.Produto);
};

module.exports = Carrinho;