var express=require('express');
var userCtrl=require('../controllers/userController')
var router=express.Router();




router.post('/login',userCtrl.login)


router.post('/register',userCtrl.register)

router.get('/forget',userCtrl.forgetPassword)

router.put('/reset',userCtrl.passwordReset);

module.exports=router;