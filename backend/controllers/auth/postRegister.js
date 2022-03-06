const User = require("../../models/user");
const bcrypt= require("bcrypt");
const jwt=require("jsonwebtoken")
const postRegister= async (req,res)=>{

    try{
        const {username, mail, password} = req.body;

        const emailExists =await User.exists({mail:mail.toLowerCase()});
        const userNameExists =await User.exists({username:username.toLowerCase()});

        if(emailExists || userNameExists)
            return  res.status(409).send('User already exists.')

        const encryptedPassword= await bcrypt.hash(password,12);

        const user = await User.create({
            username:username.toLowerCase(),
            mail:mail.toLowerCase(),
            password:encryptedPassword,
        })

        const token =jwt.sign(
            {
                userId:user._id,
                mail
            },
            process.env.TOKEN_KEY,
            {
                expiresIn:'24h',
            }
        )
        res.status(201).json({
            userDetails: {
                username: user.username,
                mail: user.mail,
                token: token
            }
        })
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
    res.send('Registration Router')
}

module.exports = postRegister;