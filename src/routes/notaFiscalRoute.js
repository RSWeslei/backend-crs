const notaFiscalController = require('../controllers/notaFiscalController');

module.exports = (app) => {
    app.get('/nota-fiscal', notaFiscalController.getAllNotaFiscal);
    app.get('/nota-fiscal/:id', notaFiscalController.getNotaFiscalById);
    app.post('/nota-fiscal', notaFiscalController.insertNotaFiscal);
    app.delete('/nota-fiscal/:id', notaFiscalController.deleteNotaFiscalById);
    app.patch('/nota-fiscal', notaFiscalController.patchNotaFiscal)
}