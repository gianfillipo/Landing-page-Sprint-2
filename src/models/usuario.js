const database = require('./configDatabase');


const cadastrarUsuario = (nome, email, senha) =>{
    console.log('Iniciando cadastro');
    var instrucao = `INSERT INTO Usuario (nome, email, password) VALUES ('${nome}', '${email}', '${senha}');`;
    
    return database.executarData(instrucao);
}



module.exports = {
    cadastrarUsuario
}