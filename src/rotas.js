const express = require('express');
const login = require('./controladores/login');
const atualizarUsuario = require('./controladores/usuarios/atualizarUsuario');
const cadastrarUsuario = require('./controladores/usuarios/cadastrarUsuarios');
const excluirUsuario = require('./controladores/usuarios/excluirUsuario');
const listarUsuarios = require('./controladores/usuarios/listarUsuarios');
const verificaLogin = require('./filtros/verificaLogin');

const rotas = express();

rotas.post('/usuarios', cadastrarUsuario);
rotas.get('/usuarios', listarUsuarios);
rotas.post('/login', login);

rotas.use(verificaLogin)

rotas.put('/usuarios', atualizarUsuario);
rotas.delete('/usuarios', excluirUsuario);

module.exports = rotas;