const express = require("express");
require("dotenv").config();
const app = express();


app.get("/",(req,res)=>{
    return res.send("hello")
})



app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log(`http://localhost:${process.env.PORT}`)
    }
})


