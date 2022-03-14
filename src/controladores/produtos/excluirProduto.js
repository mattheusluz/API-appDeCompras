const knex = require('../../conexao');

const excluirProduto = async (req, res) => {
  const { id } = req.params;

  try {
    const produto = await knex('produtos').del().where({ id });

    if (!produto) {
      return res.status(400).json({ erro: 'produto não encontrado.' });
    }

    return res.status(200).json({ mensagem: 'produto excluido com sucesso.' });
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
}

module.exports = excluirProduto;