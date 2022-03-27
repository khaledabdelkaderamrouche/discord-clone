const Conversations = require("../../models/chat");
const User = require("../../models/user");


const getConversations= async (req, res)=>{
    try{
        const sender = req.user._id;
        const receiverMail = req.user.mail;

        const receiver =await User.findOne({mail:receiverMail.toLowerCase()}, ["_id"]);

        if(!receiver)
            return  res.status(428).send("The user doesn't exist");


        const conversations = await Conversations.find({sender:sender, receiver: receiver}).sort({timestamp: -1});

        return res.status(200).json(conversations)
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}
module.exports = {
    getConversations
};