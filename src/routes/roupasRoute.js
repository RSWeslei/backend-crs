const roupasController = require('../controllers/roupasController');

module.exports = (app) => {
    app.get('/roupas', roupasController.getAllRoupas);
    app.get('/roupas/:id', roupasController.getRoupaById);
    app.post('/roupas', roupasController.insertRoupa);
    app.delete('/roupas/:id', roupasController.deleteRoupaById);
    app.patch('/roupas', roupasController.patchRoupa)
}