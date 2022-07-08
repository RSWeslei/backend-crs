const db = require('../config/db');

// retorna todos enderecos
const getAllEnderecos = async () => {
    let sql = 'select * from enderecos';
    let enderecos = await db.query(sql);
    return enderecos.rows;
}

// retorna um endereco pelo id
const getEnderecoById = async (params) => {
    let sql = 'select * from enderecos where id = $1';
    let endereco = await db.query(sql, [params.id]);
    return endereco.rows;
}

// insere um novo endereco
const insertEndereco = async (params) => {
    let { cep, endereco, complemento, bairro, numero, id_cidade } = params;
    let sql = `insert into enderecos(
        cep,
        endereco,
        complemento,
        bairro,
        numero,
        id_cidade
    ) values ($1, $2, $3, $4, $5, $6) returning id`;
    let enderecoQuery = await db.query(sql, [ cep, endereco, complemento, bairro, numero, id_cidade ]);
    return enderecoQuery.rows[0];
}

const deleteEnderecoById = async (params) => {
    let sql = `delete from enderecos where id = $1`
    let query = await db.query(sql, [params.id]);
    return query.rowCount == 1;
}

const patchEndereco = async (params) => {
    let fields = [];
    Object.keys(params).forEach(campo => campo !== 'id' && fields.push(`${campo} = '${params[campo]}'`));
    fields = fields.join(', ');
    const sql = `update enderecos set ${fields} where id = ${params.id}`;
    await db.query(sql);
}

module.exports.getAllEnderecos = getAllEnderecos;
module.exports.getEnderecoById = getEnderecoById;
module.exports.insertEndereco = insertEndereco;
module.exports.deleteEnderecoById = deleteEnderecoById;
module.exports.patchEndereco = patchEndereco;