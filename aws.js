var aws = require('aws-sdk')
var multer = require('multer')
var multerS3 = require('multer-s3')

  var s3 = new aws.S3({})
try{
  aws.config.update({
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCCESS_KEY_ID,
    region: process.env.REGION
  })
  var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'fundoo-upload-images',
      acl: 'public-read',
      metadata: function (_req, file, callback) {
        callback(null, file);
      },
      key: function (_req, _file, callback) {
        callback(null, Date.now().toString())
      }
    })
  })
}catch(err){
  console.log(err);
  
}

//
module.exports = upload;








///////????????///////////////////>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<,
//controllersexports.uploadCtrl = (req, res) => {
    let responseResult = {}
    try{
        let data = {
            id: req.body.payload._id,
            useremail: req.body.payload.useremail
        }
        const singleUplaod = upload.single('image')
        singleUplaod(req, res, function (err) {
    
            if (err) {
    
                console.log("error in controllers")
                responseResult.err = err;
                responseResult.status = false;
                res.status(500).send(responseResult)
    
            }
            else {
                data.imageUrl = req.file.location
            /***
             * @description : this method send the data and gets the response from user services
             */
                userservice.uploadService(data, (err, result) => {
                    if (err) {
                        responseResult.err = err;
                        responseResult.status = false;
                        res.status(500).send(responseResult)
                    }
                    else {
                        responseResult.data = result;
                        responseResult.status = true;
                        res.status(200).send(responseResult);
                    }
                })
            }
        })
    }catch(err){
        responseResult.err = err;
        responseResult.status = false;
        res.status(500).send(responseResult)
    }
}