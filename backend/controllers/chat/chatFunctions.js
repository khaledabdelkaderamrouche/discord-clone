const Conversations = require("../../models/chat");
const User = require("../../models/user");
const {emitNewMessage} = require("../../sockerServer");


const getConversations= async (req, res)=>{
    try{
        const sender = req.user.userId;
        const receiverMail = req.query.userMail;
        const receiver =await User.findOne({mail:receiverMail.toLowerCase()}, ["_id"]);
        const senderInfo =await User.findOne({_id:sender}, ["avatar", "username", "-_id"]);
        const receiverInfo =await User.findOne({mail:receiverMail.toLowerCase()}, ["avatar", "username", "-_id"]);
        const resultConversations =[];
        if(!receiver)
            return  res.status(428).send("The user doesn't exist");


        const conversations = await Conversations.find({
            $or: [
            { $and: [{receiver: receiver}, {sender: sender}] },
            { $and: [{receiver: sender}, {sender: receiver}] }
        ]}, ["content", "sender", "timestamp", "-_id"]).sort({timestamp: 1},);
        conversations.forEach((conversation) => {
            if(conversation._doc.sender.toString()===sender){
                delete conversation._doc.sender;
                resultConversations.push({ right: true, ...conversation._doc,...senderInfo._doc });
            } else {
                resultConversations.push({ left: true, ...conversation._doc, ...receiverInfo._doc });
            }

        });


        return res.status(200).json(resultConversations)
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}
const sendMessage= async (req, res)=>{
    try{
        const sender = req.user.userId;
        const {receiverMail, content} = req.body;

        const receiver =await User.findOne({mail:receiverMail.toLowerCase()});

        if(!receiver)
            return  res.status(428).send("The user doesn't exist");

        const chat = await Conversations.create({
            sender:sender,
            receiver:receiver,
            content:content,
        })
        if(!chat)
            return  res.status(400).send('Server Error')
        const messageSender =await User.findOne({_id:sender});
        if(!messageSender)
            return  res.status(400).send('Server Error')

        const message={
            userMail:messageSender.mail,
            message: {
                content: content,
                avatar: messageSender.avatar,
                username: messageSender.username,
                timestamp: new Date(Date.now()).toISOString(),
                left: true,
            }
        }
        emitNewMessage(receiver._id, message)
        return res.status(200).json(chat)
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}

module.exports = {
    getConversations,
    sendMessage
};