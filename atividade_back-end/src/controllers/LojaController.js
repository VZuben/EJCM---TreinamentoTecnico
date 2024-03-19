const {Op} = require('sequelize')
const Loja = require('../models/Loja');

const create = async(req,res) => {
    try{
          const loja = await Loja.create(req.body);
          console.log(req.body);
          return res.status(201).json({message: "Loja cadastrada com sucesso!", Loja: loja});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req, res) =>{
    try{
        const loja = await Loja.findAll();
        return res.status(200).json({loja});
    } catch(err){
        console.log(err.message)
        return res.status(500).json({err});
    }
};

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const loja = await Loja.findByPk(id);
        return res.status(200).json({loja});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Loja.update(req.body, {where: {id: id}});
        if(updated) {
            const loja = await Loja.findByPk(id);
            return res.status(200).send(loja);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Loja não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Loja.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Loja deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Loja não encontrado.");
    }
};

module.exports = {
    create,
    index,
    show,
    update,
    destroy,
}
