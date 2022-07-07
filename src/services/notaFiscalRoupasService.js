const { query } = require('express');
const { param } = require('express/lib/request');
const db = require('../config/db');

// retorna todos notaFiscalRoupas
const getAllNotaFiscalRoupas = async () => {
    let sql = 'select * from nota_fiscal_roupas';
    let notaFiscalRoupas = await db.query(sql);
    return notaFiscalRoupas.rows;
}

// retorna um notaFiscalRoupa pelo id
const getNotaFiscalRoupaById = async (params) => {
    let sql = 'select * from nota_fiscal_roupas where id = $1';
    let notaFiscalRoupa = await db.query(sql, [params.id]);
    return notaFiscalRoupa.rows;
}

// insere um novo notaFiscalRoupa
const insertNotaFiscalRoupa = async (params) => {
    let {quantidade, valor, id_nota_fiscal, id_roupa} = params;
    let sql = `insert into nota_fiscal_roupas(
        quantidade,
        valor,
        id_nota_fiscal,
        id_roupa
    ) values ($1, $2, $3, $4) returning id`;
    let notaFiscalRoupa = await db.query(sql, [quantidade, valor, id_nota_fiscal, id_roupa]);
    return notaFiscalRoupa.rows[0];
}

const deleteNotaFiscalRoupaById = async (params) => {
    let sql = `delete from nota_fiscal_roupas where id = $1`
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}

const patchnotaFiscalRoupa = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update nota_fiscal_roupas set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllNotaFiscalRoupas = getAllNotaFiscalRoupas;
module.exports.getNotaFiscalRoupaById = getNotaFiscalRoupaById;
module.exports.insertNotaFiscalRoupa = insertNotaFiscalRoupa;
module.exports.deleteNotaFiscalRoupaById = deleteNotaFiscalRoupaById;
module.exports.patchnotaFiscalRoupa = patchnotaFiscalRoupa;