const { Router } = require('express');
const CarrinhoController = require('../controllers/CarrinhoController');
const ClienteController = require('../controllers/ClienteController');
const LojaController = require('../controllers/LojaController');
const ProdutoController = require('../controllers/ProdutoController');
const router = Router();

//routes for Carrinho
router.post('/Carrinho',CarrinhoController.create);
router.get('/Carrinho',CarrinhoController.index);
router.get('/Carrinho/:id',CarrinhoController.show);
router.put('/Carrinho/:id',CarrinhoController.update);
router.delete('/Carrinho/:id',CarrinhoController.destroy);
router.put('/Carrinho/addRelationCliente/:carrinhoId/Cliente/:clienteId',CarrinhoController.addRelationCliente);
router.put('/Carrinho/removeRelationCliente/:id',CarrinhoController.removeRelationCliente);

//routes for Cliente
router.post('/Cliente',ClienteController.create);
router.get('/Cliente',ClienteController.index);
router.get('/Cliente/:id',ClienteController.show);
router.put('/Cliente/:id',ClienteController.update);
router.delete('/Cliente/:id',ClienteController.destroy);

//routes for Loja
router.post('/Loja',LojaController.create);
router.get('/Loja',LojaController.index);
router.get('/Loja/:id',LojaController.show);
router.put('/Loja/:id',LojaController.update);
router.delete('/Loja/:id',LojaController.destroy);

//routes for Produto
router.post('/Produto',ProdutoController.create);
router.get('/Produto',ProdutoController.index);
router.get('/Produto/:id',ProdutoController.show);
router.put('/Produto/:id',ProdutoController.update);
router.delete('/Produto/:id',ProdutoController.destroy);
router.put('/Produto/addRelationCarrinho/:produtoId/Carrinho/:carrinhoId',ProdutoController.addRelationCarrinho);
router.put('/Produto/removeRelationCarrinho/:id',ProdutoController.removeRelationCarrinho);
router.put('/Produto/addRelationLoja/:produtoId/Loja/:lojaId',ProdutoController.addRelationLoja);
router.put('/Produto/removeRelationLoja/:id',ProdutoController.removeRelationLoja);

module.exports = router;