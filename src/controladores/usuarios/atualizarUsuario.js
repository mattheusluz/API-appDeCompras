const knex = require('../../conexao');
const bcrypt = require('bcrypt');
const schemaAtualizarUsuario = require('../../validacoes/schemaAtualizarUsuario');

const atualizarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  const { usuario } = req;

  try {
    await schemaAtualizarUsuario.validate(req.body);

    const usuarios = await knex('usuarios');

    for (const u of usuarios) {
      if (u.id !== usuario.id) {
        if (u.email === usuario.email) {
          return res.status(400).json({ erro: 'email já cadastrado para outro usuario.' });
        }
      }
    }

    const usuarioEncontrado = await knex('usuarios').where({ id: usuario.id }).first();

    if (usuarioEncontrado.length === 0) {
      return res.status(400).json({ erro: 'usuario não encontrado.' });
    }

    if (senha) {
      const senhaCriptografada = await bcrypt.hash(senha, 10);

      const usuarioAtualizado = await knex('usuarios').update({ nome, email, senha: senhaCriptografada }).where({ id: usuario.id });

      if (usuarioAtualizado.length === 0) {
        return res.status(400).json({ erro: 'não foi possivel atualizar o usuario.' });
      }
    } else {
      const usuarioAtualizado = await knex('usuarios').update({ nome, email }).where({ id: usuario.id });

      if (usuarioAtualizado.length === 0) {
        return res.status(400).json({ erro: 'não foi possivel atualizar o usuario.' });
      }
    }

    return res.status(200).json({ mensagem: 'usuario atualizado com sucesso' });
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }

}

module.exports = atualizarUsuario;