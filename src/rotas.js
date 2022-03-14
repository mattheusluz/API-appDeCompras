const express = require('express');
const login = require('./controladores/login');
const cadastrarUsuario = require('./controladores/usuarios/cadastrarUsuarios');

const rotas = express();

rotas.post('/usuarios', cadastrarUsuario);
rotas.post('/login', login);

module.exports = rotas;