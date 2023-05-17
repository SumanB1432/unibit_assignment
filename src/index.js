const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();
const route = require('./routes/route');

app.use(express.json());


app.get("/",(req,res)=>{
    return res.send("hello")
})

mongoose.connect("mongodb+srv://Suman-1432:Suman1432@cluster0.bkkfmpr.mongodb.net/unibit_assignment").then(()=>{
    console.log("MONGODB is connected ")
}).catch((err)=>{
    console.log(err)
})

app.use('/', route)

app.listen(process.env.PORT,(err)=>{
    if(!err){
        console.log(`http://localhost:${process.env.PORT}`)
    }
})


