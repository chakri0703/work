var userModel=require('../app/models/userModel.js');


module.exports.register=(data,callback)=>{

    userModel.register(data,(err,result)=>
    {
        if(err){
           
            
            console.log(err);
        }
        else{
        
            
            return callback(null,result);
        }
    })
}
module.exports.login=(data,callback)=>{

    userModel.login(data,(err,result)=>
    {
        if(err){
           
            
            console.log(err);
        }
        else{
        
            
            return callback(null,result);
        }
    })
}

module.exports.forgetPassword=(data,callback)=>{

    userModel.forgetPassword(data,(err,result)=>
    {
        if(err){
           
            
            console.log(err);
        }
        else{
        
            
            return callback(null,result);
        }
    })
}
module.exports.passwordReset=(data,callback)=>{

    userModel.passwordReset(data,(err,result)=>
    {
        if(err){
           
            
            console.log(err);
        }
        else{
        
            
            return callback(null,result);
        }
    })
}