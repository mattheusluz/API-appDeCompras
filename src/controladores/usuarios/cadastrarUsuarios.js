const knex = require('../../conexao');
const bcrypt = require('bcrypt');
const schemaCadastrarUsuario = require("../../validacoes/schemaCadastrarUsuarios");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    await schemaCadastrarUsuario.validate(req.body);

    const usuarioExiste = await knex('usuarios').where({ email }).first();

    if (usuarioExiste) {
      return res.status(400).json({ erro: 'O email informado já está cadastrado.' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuarioCadastrado = await knex('usuarios').insert({ nome, email, senha: senhaCriptografada });

    if (!usuarioCadastrado) {
      return res.status(400).json({ erro: 'Não foi possível cadastrar o usuario.' });
    }

    return res.status(201).json({ mensagem: 'Usuario cadastrado com sucesso.' });
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }

}

module.exports = cadastrarUsuario;