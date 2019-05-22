var express=require('express');
var chatCtrl=require('../controllers/chatController')
var router=express.Router();

console.log("router");
//home page

router.post('/login',chatCtrl.service);