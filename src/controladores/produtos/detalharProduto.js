const knex = require('../../conexao');

const detalharProduto = async (req, res) => {
  const { id } = req.params;

  try {
    const produto = await knex('produtos').where({ id });

    if (!produto) {
      return res.status(400).json({ erro: 'não foi possivel detalhar o produto.' });
    }

    return res.status(200).json(produto);
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
}

module.exports = detalharProduto;