const clientesService = require('../services/clientesService');

const getAllClientes = async (req, res) => {
    try {
        const clientes = await clientesService.getAllClientes();
        res.status(200).send(clientes);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getClienteById = async (req, res) => {
    try {
        const cliente = await clientesService.getClienteById(req.params);
        res.status(200).send(cliente);
    } catch (error) {
        res.status(500).send(error);
    }
}

const insertCliente = async (req, res) => {
    try {
        const cliente = await clientesService.insertCliente(req.body);
        res.status(201).send(cliente);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteClienteById = async (req, res) => {
    try {
        let deletado = await clientesService.deleteClienteById(req.params);
        let msg = deletado 
            ? `Cliente ${req.params.id} deletado com sucesso` 
            : `Não foi encontrado nenhum cliente com o id ${req.params.id} para ser deletado`;
        res.status(200).send({ msg });
    } catch (error) {
        res.status(500).send(error)
    }
}

const patchCliente = async (req, res) => {
    try {
        const cliente = await clientesService.patchCliente(req.body);
        res.status(201).send(cliente);
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.getAllClientes = getAllClientes;
module.exports.getClienteById = getClienteById;
module.exports.insertCliente = insertCliente;
module.exports.deleteClienteById = deleteClienteById;
module.exports.patchCliente = patchCliente;