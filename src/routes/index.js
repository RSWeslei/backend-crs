const clientes = require('./clientesRoute')
const cidades = require('./cidadesRoute')
const enderecos = require('./enderecosRoute')
const cartaoLoja = require('./cartaoLojaRoute')
const categorias = require('./categoriasRoute')
const roupas = require('./roupasRoute')
const notaFiscal = require('./notaFiscalRoute')
const notaFiscalRoupas = require('./notaFiscalRoupasRoute')

module.exports = (app) => {
    clientes(app)
    cidades(app)
    enderecos(app)
    cartaoLoja(app)
    categorias(app)
    roupas(app)
    notaFiscal(app)
    notaFiscalRoupas(app)
}
