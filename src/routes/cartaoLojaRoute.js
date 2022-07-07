const cartaoLojaController = require('../controllers/cartaoLojaController');

module.exports = (app) => {
    app.get('/cartao-loja', cartaoLojaController.getAllCartaoLoja);
    app.get('/cartao-loja/:id', cartaoLojaController.getCartaoLojaById);
    app.post('/cartao-loja', cartaoLojaController.insertCartaoLoja);
    app.delete('/cartao-loja/:id', cartaoLojaController.deleteCartaoLojaById);
    app.patch('/cartao-loja', cartaoLojaController.patchCartaoLoja)
}