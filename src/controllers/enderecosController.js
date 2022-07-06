const enderecosService = require('../services/enderecosService');

const getAllEnderecos = async (req, res) => {
    try {
        const enderecos = await enderecosService.getAllEnderecos();
        res.status(200).send(enderecos);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getEnderecoById = async (req, res) => {
    try {
        const endereco = await enderecosService.getEnderecoById(req.params);
        res.status(200).send(endereco);
    } catch (error) {
        res.status(500).send(error);
    }
}

const insertEndereco = async (req, res) => {
    try {
        const endereco = await enderecosService.insertEndereco(req.body);
        res.status(201).send(endereco);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteEnderecoById = async (req, res) => {
    try {
        let deletado = await enderecosService.deleteEnderecoById(req.params);
        let msg = deletado 
            ? `Endereco ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum endereco com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchEndereco = async (req, res) => {
    try {
        const endereco = await enderecosService.patchEndereco(req.body);
        res.status(201).send(endereco);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.getAllEnderecos = getAllEnderecos;
module.exports.getEnderecoById = getEnderecoById;
module.exports.insertEndereco = insertEndereco;
module.exports.deleteEnderecoById = deleteEnderecoById;
module.exports.patchEndereco = patchEndereco;