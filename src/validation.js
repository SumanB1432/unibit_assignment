const joi = require('joi');

const validator = (schema)=>(payload)=>
schema.validate(payload,{abortEarly:false})

const signupSchema = joi.object({
    fname: joi.string().required().pattern(new RegExp("^[a-zA-Z]+$")),
    lname: joi.string().required().pattern(new RegExp("^[a-zA-Z]+$")),
    email: joi.string().email().required(),
    phone:joi.string().required().pattern(new RegExp("^[7-9][0-9]{9}$")),
    password: joi.string().min(8).max(16).required(),
    
})

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).max(16).required(),
  });



exports.validateSignup = validator(signupSchema);
exports.validateLogin = validator(loginSchema);
