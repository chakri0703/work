var mongoose = require('mongoose');
var mongoSchema = mongoose.Schema;
var chatSchema = new mongoSchema({
    senderUserId: {
        type:String,
        required:[true,"sender id is required"]
    },
   
        
    receiverUserId: {
        
        type:String,
        required:[true,"sender id is required"]

    },
   
    message:{

        type:String,
        required:[true,"sender id is required"]

    }

});


var chat = mongoose.model('chatInfo', chatSchema);

  module.exports.message = (chatData, callback) => {
        console.log('In chatmodel', chatData.senderUserId)

        const newMessage = new chat({
            senderUserId: chatData.senderUserId,
           
            receiverUserId: chatData.receiverUserId,

            message: chatData.message
        });
        console.log("new Msg in model==>",newMessage);
        
        newMessage.save((err, result) => {


            if (err) {
                console.log("ERROR: Data was not saved ",err);
                return callback(err);
            } else {
                console.log("Data was saved successfully");
                return callback(null,result);
            }
        });
    }




module.exports.getUserMsg = (req ,callback) => {
     
        chat.find({}, (err, data) => {
            if (err) {
                callback(err)
            } else {
                console.log("ERROR: DATA not found!",data)
                callback(null, data);
                
            }

        })
    }


