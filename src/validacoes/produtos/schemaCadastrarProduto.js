const yup = require('../configuracoes');

const schemaCadastrarProduto = yup.object().shape({
  nome: yup.string().required(),
  descricao: yup.string().required(),
  quantidade_em_estoque: yup.number().required()
})

module.exports = schemaCadastrarProduto;