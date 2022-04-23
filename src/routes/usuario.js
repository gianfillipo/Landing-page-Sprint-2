const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");



// Cadastro 1
router.get('/cadastro1', (req, res)=>{
    res.render("register_page1");
});


router.post('/cadastrarUsuario', (req,res)=>{
    controller.cadastrarUsuario(req,res);
})

module.exports = router;