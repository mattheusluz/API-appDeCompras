const knex = require('../../conexao');

const listarCompras = async (req, res) => {
  try {
    const compras = await knex('compras').orderBy('id', 'asc');

    if (!compras) {
      return res.status(400).json({ erro: 'não foi possivel listar as compras' });
    }

    return res.status(200).json(compras);
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
}

module.exports = listarCompras;