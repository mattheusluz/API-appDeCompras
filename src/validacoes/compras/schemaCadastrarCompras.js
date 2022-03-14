const yup = require('../configuracoes');

const schemaCadastrarCompras = yup.object().shape({
  // usuario_id: yup.number().required(),
  produto: yup.string().required(),
  quantidade: yup.number().required()
})

module.exports = schemaCadastrarCompras;