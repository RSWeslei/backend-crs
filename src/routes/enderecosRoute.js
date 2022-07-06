const enderecosController = require('../controllers/enderecosController');

module.exports = (app) => {
    app.get('/enderecos', enderecosController.getAllEnderecos);
    app.get('/enderecos/:id', enderecosController.getEnderecoById);
    app.post('/enderecos', enderecosController.insertEndereco);
    app.delete('/enderecos/:id', enderecosController.deleteEnderecoById);
    app.patch('/enderecos', enderecosController.patchEndereco)
}