const knex = require('../../conexao');
const schemaAtualizarProduto = require('../../validacoes/produtos/schemaAtualizarProduto');

const atualizarProduto = async (req, res) => {
  const { nome, descricao, quantidade_em_estoque, imagem } = req.body;
  const { id } = req.params;

  try {
    await schemaAtualizarProduto.validate(req.body);

    const produto = await knex('produtos').update({ nome, descricao, quantidade_em_estoque, imagem }).where({ id });

    if (!produto) {
      return res.status(400).json({ erro: 'produto não encontrado.' });
    }

    return res.status(201).json({ menssagem: 'produto atualizado com sucesso.' });
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
}

module.exports = atualizarProduto;