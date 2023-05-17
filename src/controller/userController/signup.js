const userModel = require("../../model/userModel");
const {validateSignup} = require("../../validation.js")


const signup = async function(req,res){
    try {

        let data = req.body;
        const{error,value} = validateSignup(data);

        if(error){
            return res.status(400).send(error.details)
        }

       
        let getUserEmail = await userModel.findOne({email:data.email});
        console.log(getUserEmail)
        if(getUserEmail){
            return res.status(400).send({status:false,message:`${data.email} is already registered`})
        }

        let getUserPhone = await userModel.findOne({phone:data.phone});
        if(getUserPhone){
            return res.status(400).send({status:false,message:`${data.phone} is already registered`})
        }

        let createUser = await userModel.create(data);


        return res.status(201).send({status:true,data:createUser})


        
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
        
    }
}
module.exports.signup = signup;