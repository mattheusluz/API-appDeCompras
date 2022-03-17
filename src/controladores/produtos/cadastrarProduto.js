const knex = require('../../conexao');
const schemaCadastrarProduto = require('../../validacoes/produtos/schemaCadastrarProduto');

const cadastarProduto = async (req, res) => {
  const { nome, descricao, quantidade_em_estoque, imagem } = req.body;

  try {
    await schemaCadastrarProduto.validate(req.body);

    const produto = await knex('produtos').insert({ nome, descricao, quantidade_em_estoque, imagem });

    if (produto.length === 0) {
      return res.status(400).json({ erro: 'não foi possivel cadastrar o produto.' });
    }

    return res.status(201).json({ menssagem: 'produto cadastrado com sucesso.' });
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
}

module.exports = cadastarProduto;