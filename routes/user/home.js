const express = require('express')
const HomeController = require('../../controllers/user/HomeController')
const route = express.Router();
route.get('/user/books',(req,res) => {
    HomeController.getBooks(req, res)
})
route.get('/user/book/:id',(req,res)=> {
    HomeController.getBookForUser(req, res)
})
module.exports = route