const knex = require('../../conexao');
const schemaCadastrarCompras = require('../../validacoes/compras/schemaCadastrarCompras');

const cadastrarCompra = async (req, res) => {
  const { usuario } = req;
  const { produto, quantidade } = req.body;

  try {
    await schemaCadastrarCompras.validate(req.body)

    const compra = await knex('compras').insert({ usuario_id: usuario.id, produto, quantidade });

    if (!compra) {
      return res.status(400).json({ erro: 'não foi possivel cadastrar a compra.' });
    }

    return res.status(201).json({ mensagem: 'compra cadastrada com sucesso.' });
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
}

module.exports = cadastrarCompra;