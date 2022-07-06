const cidadesService = require('../services/cidadesService');

const getAllCidades = async (req, res) => {
    try {
        const cidades = await cidadesService.getAllCidades();
        res.status(200).send(cidades);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getCidadesById = async (req, res) => {
    try {
        const cidade = await cidadesService.getCidadesById(req.params);
        res.status(200).send(cidade);
    } catch (error) {
        res.status(500).send(error);
    }
}

const insertCidade = async (req, res) => {
    try {
        const cidade = await cidadesService.insertCidade(req.body);
        res.status(201).send(cidade);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteCidadeById = async (req, res) => {
    try {
        let deletado = await cidadesService.deleteCidadeById(req.params);
        let msg = deletado 
            ? `cidade ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum cidade com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchCidade = async (req, res) => {
    try {
        const cidade = await cidadesService.patchCidade(req.body);
        res.status(201).send(cidade);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.getAllCidades = getAllCidades;
module.exports.getCidadesById = getCidadesById;
module.exports.insertCidade = insertCidade;
module.exports.deleteCidadeById = deleteCidadeById;
module.exports.patchCidade = patchCidade;