const express = require("express");
const router = express.Router();

// Home 
router.get("/", (req, res)=> {
    res.render("home_page");
});

// Login
router.get("/login", (req, res)=>{
    res.render("login_page");
});

// Fale Conosco
router.get('/fale-conosco', (req, res)=>{
    res.render("contact_page");
});

// Cadastro 1
router.get('/cadastro1', (req, res)=>{
    res.render("register_page1");
});

// Cadastro 2
router.get('/cadastro2', (req, res)=>{
    res.render("register_page2");
});

// Calculadora financeira
router.get('/simulador', (req,res)=>{
    res.render("calculadora_financeira");
})
module.exports = router;
