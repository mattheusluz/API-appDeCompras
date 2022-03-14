const knex = require('../../conexao');

const excluirUsuario = async (req, res) => {
  const { usuario } = req;

  try {
    const usuarioExcluido = await knex('usuarios').del().where({ id: usuario.id });

    if (!usuarioExcluido) {
      return res.status(400).json({ erro: 'não foi possivel exxluir o usuario.' });
    }

    return res.status(200).json({ mensagem: 'usuario excluido com sucesso.' });
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
}

module.exports = excluirUsuario;