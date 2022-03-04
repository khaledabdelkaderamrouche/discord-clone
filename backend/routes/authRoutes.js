const express = require("express");
const router=express.Router()

router.post('/register',(req,res)=>{
    res.send('Registration Router')
})
router.post('/login',(req,res)=>{
    res.send('Login Router')
})

module.exports = router;