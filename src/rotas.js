const express = require('express');
const login = require('./controladores/login');
const atualizarProduto = require('./controladores/produtos/atualizarProduto');
const cadastarProduto = require('./controladores/produtos/cadastrarProduto');
const listarProdutos = require('./controladores/produtos/listarProdutos');
const atualizarUsuario = require('./controladores/usuarios/atualizarUsuario');
const cadastrarUsuario = require('./controladores/usuarios/cadastrarUsuarios');
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

rotas.use(verificaLogin)

rotas.put('/usuarios', atualizarUsuario);
rotas.delete('/usuarios', excluirUsuario);

module.exports = rotas;