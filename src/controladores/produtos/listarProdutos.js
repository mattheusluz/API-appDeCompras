const knex = require('../../conexao');

const listarProdutos = async (req, res) => {
  try {
    const produtos = await knex('produtos').orderBy('id', 'asc');

    if (!produtos) {
      return res.status(400).json({ erro: 'não foi possivel listar os produtos' });
    }

    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
}

module.exports = listarProdutos;