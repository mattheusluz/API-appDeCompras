const express = require('express');
const cadastrarCompra = require('./controladores/compras/cadastrarCompra');
const listarCompras = require('./controladores/compras/listarCompras');
const listarComprasDoUsuarioLogado = require('./controladores/compras/listarComprasDoUsuarioLogado');
const login = require('./controladores/login');
const atualizarProduto = require('./controladores/produtos/atualizarProduto');
const cadastarProduto = require('./controladores/produtos/cadastrarProduto');
const detalharProduto = require('./controladores/produtos/detalharProduto');
const excluirProduto = require('./controladores/produtos/excluirProduto');
const listarProdutos = require('./controladores/produtos/listarProdutos');
const atualizarUsuario = require('./controladores/usuarios/atualizarUsuario');
const cadastrarUsuario = require('./controladores/usuarios/cadastrarUsuarios');
const detalharUsuario = require('./controladores/usuarios/detalharUsuario');
const excluirUsuario = require('./controladores/usuarios/excluirUsuario');
const listarUsuarios = require('./controladores/usuarios/listarUsuarios');
const verificaLogin = require('./filtros/verificaLogin');

const rotas = express();

rotas.post('/usuarios', cadastrarUsuario);
rotas.get('/usuarios', listarUsuarios);
rotas.post('/login', login);

rotas.post('/produtos', cadastarProduto);
rotas.put('/produtos/:id', atualizarProduto);
rotas.get('/produtos', listarProdutos);
rotas.get('/produto/:id', detalharProduto);
rotas.delete('/produtos/:id', excluirProduto);

rotas.get('/compras', listarCompras);

rotas.use(verificaLogin)

rotas.get('/usuario', detalharUsuario);
rotas.put('/usuarios', atualizarUsuario);
rotas.delete('/usuarios', excluirUsuario);

rotas.post('/compras', cadastrarCompra);

rotas.get('/comprasDoUsuario', listarComprasDoUsuarioLogado);

module.exports = rotas;