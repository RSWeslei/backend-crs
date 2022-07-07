const notaFiscalRoupasService = require('../services/notaFiscalRoupasService');

const getAllNotaFiscalRoupas = async (req, res) => {
    try {
        const notaFiscalRoupas = await notaFiscalRoupasService.getAllNotaFiscalRoupas();
        res.status(200).send(notaFiscalRoupas);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getNotaFiscalRoupaById = async (req, res) => {
    console.log('oi controller');
    try {
        const notaFiscalRoupa = await notaFiscalRoupasService.getNotaFiscalRoupaById(req.params);
        res.status(200).send(notaFiscalRoupa);
    } catch (error) {
        res.status(500).send(error);
    }
}

const insertNotaFiscalRoupa = async (req, res) => {
    try {
        const notaFiscalRoupa = await notaFiscalRoupasService.insertNotaFiscalRoupa(req.body);
        res.status(201).send(notaFiscalRoupa);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteNotaFiscalRoupaById = async (req, res) => {
    try {
        let deletado = await notaFiscalRoupasService.deleteNotaFiscalRoupaById(req.params);
        let msg = deletado 
            ? `NotaFiscalRoupa ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum notaFiscalRoupa com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchNotaFiscalRoupa = async (req, res) => {
    try {
        const notaFiscalRoupa = await notaFiscalRoupasService.patchNotaFiscalRoupa(req.body);
        res.status(201).send(notaFiscalRoupa);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.getAllNotaFiscalRoupas = getAllNotaFiscalRoupas;
module.exports.getNotaFiscalRoupaById = getNotaFiscalRoupaById;
module.exports.insertNotaFiscalRoupa = insertNotaFiscalRoupa;
module.exports.deleteNotaFiscalRoupaById = deleteNotaFiscalRoupaById;
module.exports.patchNotaFiscalRoupa = patchNotaFiscalRoupa;