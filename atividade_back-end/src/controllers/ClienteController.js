const {Op} = require('sequelize');
const Carrinho = require('../models/Carrinho');
const Cliente = require('../models/Cliente');

const create = async(req,res) => {
    try{
          const cliente = await Cliente.create(req.body);
          console.log(req.body);
          return res.status(201).json({message: "Cliente cadastrada com sucesso!", Cliente: cliente});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req, res) =>{
    try{
        const cliente = await Cliente.findAll();
        return res.status(200).json({cliente});
    } catch(err){
        console.log(err.message)
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const cliente = await Cliente.findByPk(id, {include: {model:Carrinho}});
        return res.status(200).json({cliente});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Cliente.update(req.body, {where: {id: id}});
        if(updated) {
            const cliente = await Cliente.findByPk(id);
            return res.status(200).send(cliente);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Cliente não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Cliente.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Cliente deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Cliente não encontrado.");
    }
};

module.exports = {
    create,
    index,
    show,
    update,
    destroy,
}
