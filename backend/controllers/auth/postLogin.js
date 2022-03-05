const User = require("../../models/user");
const bcrypt= require("bcrypt");
const JWT=require("jsonwebtoken")
const postLogin= async (req,res)=>{

    try{
        const {mail, password} = req.body;
        
        const user =await User.findOne({mail:mail.toLowerCase()});

        if(!user)
            return  res.status(401).send('The informations you provided is incorrect.')

        if(await bcrypt.compare(password,user.password)){
            const token ='JWT TOKEN';
            return res.status(200).json({
                mail:user.mail,
                token:token,
                username:user.username
            });
        }else{
            return  res.status(401).send('The informations you provided is incorrect.')
        }
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}

module.exports = postLogin;