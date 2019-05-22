const chatServices = require('../services/chatService')
try {
    module.exports.message = (req, callback) => {
        console.log("request = ", req);
        chatServices.message(req.body, (err, data) => {
            if (err) {
                console.log("ERROR: in controller");
                callback(err);
            } else {
                console.log("controller works");
                callback(null, data);
            }
        })
    }
}
catch (err) {
    console.log("ERROR: while sending the message");
}
try {
    module.exports.getUserMsg = (req, res) => {
        chatServices.getUserMsg(req.body, (err, data) => {
            var responseResult = {};
            if (err) {
              callback(err)

            } else {
             res.send(res)
            }
        })
    }
}
catch (err) {
    console.log("ERROR : in chat controll");

}