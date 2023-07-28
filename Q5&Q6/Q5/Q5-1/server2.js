const express = require('express')

const app =express()
var fs = require ('fs'); 

// middleware  

app.use(express.urlencoded({extended:true})) ;


app.post("/login",function(req,res){ 
    console.log("hdthreherh")

})

server.listen(5500, () => {
    console.log('Server running on port 5500');
  });