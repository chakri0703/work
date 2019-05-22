const mongoose = require('mongoose');


var user = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },

    email: {
        type: String,
        unique: true,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "pasword is required"]
    }
}
);

var user = mongoose.model('user', user);

module.exports.register = (res, callback) => {
    const newUser = new user(
        {
            name: res.name,
            email: res.email,
            password: res.password

        })



    newUser.save(function (err, result) {
        if (err) {
            return callback(err);
        } else {
            return callback(result);
        }
    });
}

module.exports.login = (res, callback) => {
    var data = user.findOne({ email: res.email,password:res.password }, function (err, res) {
        if (err) {
            console.log(err);

        }
        else {
        
            if(res!==null)
            {
                console.log("loed in as "+res.name);
                
            }
            else{
                callback(null,res);
            }

        }
    })
}

module.exports.forgetPassword = (res, callback) => {
    var data = user.findOne({ email: res.email }, function (err, res) {
        if (err) {
            console.log(err);

        }
        else {
        
            if(res!==null)
            {
                console.log("ur name"+res.name);
                
            }
            else{
                callback(null,res);
            }

        }
    })
}


module.exports.passwordReset = (res, callback) => {

    console.log("in reset password mpodel")
    console.log(res.email);
    console.log(res.password);
    console.log(res.newPassword);
    
    
    //var query={email:res.email,password:res.password};
    
    
    // update={$set:{password:res.newPassword}};
    console.log(update);
    user.updateOne({email:res.email,password:res.password},{$set:{password:res.newPassword}},function(err,res)
    {
        if(err)
        {
            console.log(err);
        }
        else{
            if(res!==null){
            console.log("update sucessfully");
            callback(null,res);
            }
            else{
                console.log("updsate failed")
                callback(null,res);
            }
        }
    })
}
