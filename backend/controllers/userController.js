var userService=require('../services/userService');




module.exports.login=(req,res)=>{
//console.log("in  login controller",req.body);
res.send("in login controller");

userService.login(req.body,(err,result)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(reult);

        res.send("login controller")
    }
})
}

module.exports.register=(req,res)=>
{
    console.log("in register controller")
    // res.send("in register")
    userService.register(req.body,(err,result)=>
    {
        if(err)
        {
         console.log(err);
        }
        else{
            console.log(result);
            
            
            res.send("register controller")
        }
    })
}

module.exports.forgetPassword=(req,res)=>
{
    console.log("in forget passsword controller");
    userService.forgetPassword(req.body,(err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(result);

            res.send("forget password controller")
        }
    })
}

module.exports.passwordReset=(req,res)=>
{
    console.log("in  passsword reset controller");
    userService.passwordReset(req.body,(err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(result);

            res.send("password reset controller");
        }
    })
}

