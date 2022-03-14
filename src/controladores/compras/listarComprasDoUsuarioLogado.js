const knex = require('../../conexao');

const listarComprasDoUsuarioLogado = async (req, res) => {
  const { usuario } = req;
  try {
    const compras = await knex('compras').where({ usuario_id: usuario.id }).orderBy('id', 'asc');

    if (!compras) {
      return res.status(400).json({ erro: 'não foi possivel listar as compras' });
    }

    return res.status(200).json(compras);
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
}

module.exports = listarComprasDoUsuarioLogado;