const cartaoLojaController = require('../controllers/cartaoLojaController');

module.exports = (app) => {
    app.get('/cartaoLoja', cartaoLojaController.getAllCartaoLoja);
    app.get('/cartaoLoja/:id', cartaoLojaController.getCartaoLojaById);
    app.post('/cartaoLoja', cartaoLojaController.insertCartaoLoja);
    app.delete('/cartaoLoja/:id', cartaoLojaController.deleteCartaoLojaById);
    app.patch('/cartaoLoja', cartaoLojaController.patchCartaoLoja)
}