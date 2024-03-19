const {Op} = require('sequelize')
const Produto = require('../models/Produto');
const Carrinho = require('../models/Carrinho');
const Loja = require('../models/Loja');

const create = async(req,res) => {
    try{
          const produto = await Produto.create(req.body);
          console.log(req.body);
          return res.status(201).json({message: "Produto cadastrada com sucesso!", Produto: produto});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req, res) =>{
    try{
        const produto = await Produto.findAll();
        return res.status(200).json({produto});
    } catch(err){
        console.log(err.message)
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const produto = await Produto.findByPk(id);
        return res.status(200).json({produto});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Produto.update(req.body, {where: {id: id}});
        if(updated) {
            const produto = await Produto.findByPk(id);
            return res.status(200).send(produto);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Produto não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Produto.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Produto deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Produto não encontrado.");
    }
};

const addRelationCarrinho = async(req,res) => {
    const {produtoId, carrinhoId} = req.params;
    try {
        const produto = await Produto.findByPk(produtoId);
        const carrinho = await Carrinho.findByPk(carrinhoId);
        await produto.setCarrinho(carrinho);
        return res.status(200).json(produto);
    }catch(err){
        return res.status(500).json({err});
    }
};

const removeRelationCarrinho = async(req,res) => {
    const {id} = req.params;
    try {
        const produto = await Produto.findByPk(id);
        await produto.setCarrinho(null);
        return res.status(200).json(produto);
    }catch(err){
        return res.status(500).json({err});
    }
}

const addRelationLoja = async(req,res) => {
    const {produtoId, lojaId} = req.params;
    try {
        const produto = await Produto.findByPk(produtoId);
        const loja = await Loja.findByPk(lojaId);
        await produto.setLoja(loja);
        return res.status(200).json(produto);
    }catch(err){
        return res.status(500).json({err});
    }
};

const removeRelationLoja = async(req,res) => {
    const {id} = req.params;
    try {
        const produto = await Produto.findByPk(id);
        await produto.setLoja(null);
        return res.status(200).json(produto);
    }catch(err){
        return res.status(500).json({err});
    }
}

module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    addRelationCarrinho,
    removeRelationCarrinho,
    addRelationLoja,
    removeRelationLoja,
}
