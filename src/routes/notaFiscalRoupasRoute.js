const notaFiscalRoupasController = require('../controllers/notaFiscalRoupasController');

module.exports = (app) => {
    app.get('/nota-fiscal-roupas', notaFiscalRoupasController.getAllNotaFiscalRoupas);
    app.get('/nota-fiscal-roupas/:id', notaFiscalRoupasController.getNotaFiscalRoupaById);
    app.post('/nota-fiscal-roupas', notaFiscalRoupasController.insertNotaFiscalRoupa);
    app.delete('/nota-fiscal-roupas/:id', notaFiscalRoupasController.deleteNotaFiscalRoupaById);
    app.patch('/nota-fiscal-roupas', notaFiscalRoupasController.patchNotaFiscalRoupa)
}