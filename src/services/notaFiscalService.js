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
    const {emissao, numero, id_cliente} = params;
    let sql = `insert into nota_fiscal(
        valor,
        emissao,
        numero,
        id_cliente
    ) values($1, $2, $3, $4) returning id;`
    let sqlNotaRoupa = `insert into nota_fiscal_roupas(
        quantidade, 
        valor, 
        id_nota_fiscal, 
        id_roupa
    ) values($1, $2, $3, $4);`
    const idNota = await (await db.query(sql, [0, emissao, numero, id_cliente])).rows[0].id
    for (const roupa of params.roupas)
    {
        const {quantidade, diferenca, id_roupa} = roupa
        let sql = `select preco_venda from roupas where $1 = id;`
        let valor = await (await db.query(sql, [id_roupa])).rows[0].preco_venda
        valor = (Number(valor) + diferenca) * quantidade
        roupa.valor = valor
        await db.query(sqlNotaRoupa, [quantidade, Number(valor), idNota, id_roupa])
    }
    let valorAtualizado = await somarValorRoupas(params.roupas)
    await db.query(`update nota_fiscal set valor = $1 where $2 = id;`, [valorAtualizado.toFixed(2), idNota])
    return params.roupas
}

const somarValorRoupas = async (roupas) => {
    return roupas.map(roupa => Number(roupa.valor))
    .reduce((soma, valorAtual) => soma + valorAtual)  
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