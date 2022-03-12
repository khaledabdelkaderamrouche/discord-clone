const express = require("express");
const router=express.Router()
const authControllers=require('../controllers/auth/authControllers');
const Joi=require('joi');
const validator= require('express-joi-validation').createValidator({})
const auth =require ('../middleware/auth');

const registerSchema = Joi.object({
    username: Joi.string().min(2).max(12).regex(/^$|^[A-Za-z]([ ]*[A-Za-z]){0,12}[^\s]$/),
    number: Joi.string().min(8).max(12).regex(/^\d([ -]?\d){7}$/),
    password: Joi.string().min(8).max(28).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.$!%*?&])[A-Za-z\d@.$!%*?&]{8,}$/).required(),
    mail: Joi.string().email().required(),
})
const loginSchema = Joi.object({
    password: Joi.string().min(8).max(28).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.$!%*?&])[A-Za-z\d@.$!%*?&]{8,}$/).required(),
    mail: Joi.string().email().required(),
})


router.post('/register',
    validator.body(registerSchema),
    authControllers.controllers.postRegister
)
router.post('/login',
    validator.body(loginSchema),
    authControllers.controllers.postLogin
)


//test
router.get('/test',auth,(req, res) =>{
    res.send('PASSED');
    }
)
module.exports = router;