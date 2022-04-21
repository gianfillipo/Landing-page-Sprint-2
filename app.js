const express = require('express');
const app = express()
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');
const { append } = require('express/lib/response');
const porta = 8000

// Dotenv Configure the sensitive information such as passwords 
dotenv.config({ path: "./.env"})

// Configure the mysql connection
const database = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

// Database
database.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Mysql connected.")
    }
})


// Routes config
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

var pages = require('./src/routes/pages');

app.use('/', pages);

app.listen(porta,()=>{
    console.log(`Server conectado na porta ${porta}`);
})