const express = require("express");
var usuarioModel = require('../models/usuarioQuery');

const cadastrarUsuario = (req, res) => {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    if (nome == "") {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == "") {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == "") {
        res.status(400).send("Sua senha está undefined!");
    } else {

        usuarioModel.cadastrarUsuario(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

const cadastrarEmpresa = (req, res) => {
    var empresa = req.body.empresaServer
    var cnpj = req.body.cnpjServer

    if (empresa == "") {
        res.status(400).send("O nome da empresa está undefined");
    } else if (cnpj == "") {
        res.status(400).send("O cnpj está undefined");
    } else {
        usuarioModel.cadastrarEmpresa(empresa, cnpj)
            .then((resultado) => {
                res.json(resultado);
            })
            .catch((erro) => {
                console.log(erro);
                console.log("Houve um erro ao realizar o cadastro", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


function logar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == "") { 
        res.status(400).send("Seu email está undefined!");
    } else if (senha == "") {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.logar(email, senha)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado[0]);
                } else if (resultado.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                }
            }
        ).catch(
                function (erro) {
                    console.log(reject);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


module.exports = {
    cadastrarUsuario,
    cadastrarEmpresa,
    logar
};