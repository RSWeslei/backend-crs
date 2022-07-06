const notaFiscalRoupasController = require('../controllers/notaFiscalRoupasController');

module.exports = (app) => {
    app.get('/notaFiscalRoupas', notaFiscalRoupasController.getAllNotaFiscalRoupas);
    app.get('/notaFiscalRoupas/:id', notaFiscalRoupasController.getNotaFiscalRoupaById);
    app.post('/notaFiscalRoupas', notaFiscalRoupasController.insertNotaFiscalRoupa);
    app.delete('/notaFiscalRoupas/:id', notaFiscalRoupasController.deleteNotaFiscalRoupaById);
    app.patch('/notaFiscalRoupas', notaFiscalRoupasController.patchNotaFiscalRoupa)
}