// const express=require("express");
// const app=express();
// app.get('/',(req,res)=>{
//     res.set('content-type','text/html')
// res.status(200).send("welcome to my node");
// })
// app.listen('7000',(error)=>{
//     if(!error){
//         console.log("server has started at 7000")
//     }
//     else{
//         console.log("error at starting server"+error) 
//     }
// })

const http=require("http");
var server=http.createServer(function(req,res){
    console.log("welcome");
});
server.listen(7000);
// // const app=express();

