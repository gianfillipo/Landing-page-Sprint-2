const express = require('express');
const app = express()
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');
const { append } = require('express/lib/response');
const porta = 8000

// Dotenv Configure the sensitive information such as passwords 
dotenv.config({ path: "./.env"})



// Routes config
app.set('view engine', 'hbs'); // Define o modo de exibição das views.
app.use(express.json()); // Serve para interpretar o json das requisições
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

var pages = require('./src/routes/pages');
var usuario = require('./src/routes/usuario');

app.use('/', pages);
app.use('/usuario', usuario);


app.listen(porta,()=>{
    console.log(`Server conectado na porta ${porta}`);
})