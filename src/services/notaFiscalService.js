const { query } = require('express');
const { param } = require('express/lib/request');
const db = require('../config/db');

// retorna todos notaFiscal
const getAllNotaFiscal = async () => {
    let sql = 'select * from nota_fiscal';
    let notaFiscal = await db.query(sql);
    return notaFiscal.rows;
}

// retorna um notaFiscal pelo id
const getNotaFiscalById = async (params) => {
    let sql = 'select * from nota_fiscal where id = $1';
    let notaFiscal = await db.query(sql, [params.id]);
    return notaFiscal.rows;
}

// insere um novo notaFiscal
const insertNotaFiscal = async (params) => {
    let {valor, emissao, numero, id_cliente} = params;
    let sql = `insert into nota_fiscal(
        valor,
        emissao,
        numero,
        id_cliente
    ) values ($1, $2, $3, $4) returning id`;
    let notaFiscal = await db.query(sql, [valor, emissao, numero, id_cliente]);
    return notaFiscal.rows[0];
}

const deleteNotaFiscalById = async (params) => {
    let sql = `delete from nota_fiscal where id = $1`
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}

const patchNotaFiscal = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update nota_fiscal set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllNotaFiscal = getAllNotaFiscal;
module.exports.getNotaFiscalById = getNotaFiscalById;
module.exports.insertNotaFiscal = insertNotaFiscal;
module.exports.deleteNotaFiscalById = deleteNotaFiscalById;
module.exports.patchNotaFiscal = patchNotaFiscal;