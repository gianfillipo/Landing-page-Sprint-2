const express = require("express");
var usuarioModel = require('../models/usuario');

function cadastrarUsuario(req, res) {
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
module.exports = {
    cadastrarUsuario
};