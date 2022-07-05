const clientesController = require('../controllers/clientesController');

module.exports = (app) => {
    app.get('/clientes', clientesController.getAllClientes);
    app.get('/clientes/:id', clientesController.getClienteById);
    app.post('/clientes', clientesController.insertCliente);
    app.delete('/clientes/:id', clientesController.deleteClienteById);
    app.patch('/clientes', clientesController.patchCliente)
}