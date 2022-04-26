const database = require('./configDatabase');


const cadastrarUsuario = (nome, email, senha) =>{
    console.log('Cadastrando usuário');
    var instrucao = `INSERT INTO Usuario (nome, email, password) VALUES ('${nome}', '${email}', '${senha}');`;
    
    return database.executarData(instrucao);
}

const cadastrarEmpresa = (empresa, cnpj) =>{
    console.log('Cadastrando empresa')
    var instrucao = `INSERT INTO Empresa (nome, cnpj) VALUES ('${empresa}', '${cnpj}');`
    return database.executarData(instrucao);
}


function logar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `SELECT * FROM Usuario WHERE email = '${email}' AND password = '${senha}';`
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executarData(instrucao);
}

module.exports = {
    cadastrarUsuario,
    cadastrarEmpresa,
    logar
}