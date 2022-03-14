const knex = require('../../conexao');

const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await knex('usuarios').orderBy('id', 'asc');

    if (!usuarios) {
      return res.status(400).json({ erro: 'não foi possivel listar os usuarios.' });
    }

    const listaUsuarios = [];

    for (const usuario of usuarios) {
      const { senha, ...dadosUsuarios } = usuario
      listaUsuarios.push(dadosUsuarios)
    }

    return res.status(200).json(listaUsuarios);
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
}

module.exports = listarUsuarios;