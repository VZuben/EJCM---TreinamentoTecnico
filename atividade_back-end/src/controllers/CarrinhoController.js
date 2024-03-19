const {Op} = require('sequelize')
const Carrinho = require('../models/Carrinho');
const Cliente = require('../models/Cliente');

const create = async(req,res) => {
    try{
          const carrinho = await Carrinho.create(req.body);
          console.log(req.body);
          return res.status(201).json({message: "Carrinho cadastrada com sucesso!", Carrinho: carrinho});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req, res) =>{
    try{
        const carrinho = await Carrinho.findAll();
        return res.status(200).json({carrinho});
    } catch(err){
        console.log(err.message)
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const carrinho = await Carrinho.findByPk(id);
        return res.status(200).json({carrinho});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Carrinho.update(req.body, {where: {id: id}});
        if(updated) {
            const carrinho = await Carrinho.findByPk(id);
            return res.status(200).send(carrinho);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Carrinho não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Carrinho.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Carrinho deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Carrinho não encontrado.");
    }
};

const addRelationCliente = async(req,res) => {
    const {carrinhoId, clienteId} = req.params;
    try {
        const carrinho = await Carrinho.findByPk(carrinhoId);
        const cliente = await Cliente.findByPk(clienteId);
        await carrinho.setCliente(cliente);
        return res.status(200).json(carrinho);
    }catch(err){
        return res.status(500).json({err});
    }
};

const removeRelationCliente = async(req,res) => {
    const {id} = req.params;
    try {
        const carrinho = await Carrinho.findByPk(id);
        console.log(id);
        await carrinho.setCliente(null);
        return res.status(200).json(carrinho);
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
    addRelationCliente,
    removeRelationCliente,
}
