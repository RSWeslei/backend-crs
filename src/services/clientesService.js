const { query } = require('express');
const { param } = require('express/lib/request');
const db = require('../config/db');

// retorna todos clientes
const getAllClientes = async () => {
    let sql = 'select * from clientes';
    let clientes = await db.query(sql);
    return clientes.rows;
}

// retorna um cliente pelo id
const getClienteById = async (params) => {
    let sql = 'select * from clientes where id = $1';
    let cliente = await db.query(sql, [params.id]);
    return cliente.rows;
}

// insere um novo cliente
const insertCliente = async (params) => {
    let {nome, cpf, email, telefone, nascimento, ativo, id_endereco} = params;
    let sql = `insert into clientes(
        nome,
        cpf,
        email,
        telefone,
        nascimento,
        ativo,
        id_endereco
    ) values ($1, $2, $3, $4, $5, $6, $7) returning id`;
    let cliente = await db.query(sql, [nome, cpf, email, telefone, nascimento, ativo, id_endereco]);
    return cliente.rows[0];
}

const deleteClienteById = async (params) => {
    let sql = `delete from clientes where id = $1`
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}

const patchCliente = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update clientes set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllClientes = getAllClientes;
module.exports.getClienteById = getClienteById;
module.exports.insertCliente = insertCliente;
module.exports.deleteClienteById = deleteClienteById;
module.exports.patchCliente = patchCliente;