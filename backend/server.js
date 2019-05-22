const express=require('express');
const bodyParser=require('body-parser');
const dbConfig=require('../backend/config/dbConfig.js')
var routes=require('../backend/routes/userRoute')
var socket=require('socket.io');
var chatCtrl=require("./controllers/chatController")
var io=require('socket.io');

const mongoose=require('mongoose');
mongoose.set('useCreateIndex', true);


mongoose.Promise=global.Promise;


const app=express();

app.use(express.static('frontend')); 

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json());

app.use('/',routes);

mongoose.connect(dbConfig.url,{
useNewUrlParser:true
}).then(()=>
{
    console.log(" DB connected sucessfully");
}).catch(err=>
    {
        console.log(" DB could not connect");
        process.exit(0);
    })

   


var server=app.listen(3000,()=>
{
    console.log("server is listening on port 3000 ")
})

var io=socket(server);


io.on('connection', function(socket) {


    
    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('createMessage', function(data){
    chatCtrl.message(data,(err,data)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            io.emit('chat', data);

        }
    })
    });
    socket.emit('disconnected',function(){
        console.log("socket is disconnected"+socket.id);
    })
    // Handle typing event
    socket.o
    ('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

})