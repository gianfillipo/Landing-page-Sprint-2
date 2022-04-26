var mysql = require('mysql');


// Configure the mysql connection
const database = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

// Conectando ao banco de dados
function executarData (instrucao){
    return new Promise((resolve,reject)=>{
        database.query(instrucao, (err, result)=>{
            if(err){
                reject(err)
            }

            console.log(result);
            resolve(result)
            
        });
    })
}

module.exports = {
    executarData
}