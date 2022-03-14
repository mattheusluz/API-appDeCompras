const yup = require('../configuracoes');

const schemaAtualizarUsuario = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().min(8).max(25)
})

module.exports = schemaAtualizarUsuario;