const yup = require('../configuracoes');

const schemaAtualizarProduto = yup.object().shape({
  nome: yup.string(),
  descricao: yup.string(),
  quantidade_em_estoque: yup.number(),
  imagem: yup.string()
})

module.exports = schemaAtualizarProduto;