const User = require("../../models/user");

const sendInvitation= async (req, res)=>{
    try{
        const {senderMail, receiverMail} = req.body;

        if(senderMail === receiverMail)
            return  res.status(409).send("You are lonely");

        const senderUser =await User.findOne({mail:senderMail.toLowerCase()});
        const receiverUser =await User.findOne({mail:receiverMail.toLowerCase()});

        if(!senderUser)
            return  res.status(428).send("The sender don't exist");
        if(!receiverUser)
            return  res.status(428).send("The receiver don't exist");




        const updated= await User.updateOne({mail: receiverMail}, {$addToSet: {invitations: senderUser._id}})
        if(updated){
            return res.status(200).send('The invitation was sent to the user.')
        }else{
            return  res.status(400).send('Server Error')
        }
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}
const getInvitations= async (req, res)=>{
    try{
        const {userMail} = req.query;

        const user =await User.findOne({mail:userMail.toLowerCase()});

        if(!user)
            return  res.status(428).send("The user don't exist");

        const invitationsIds= await User.findOne({mail: userMail}, "invitations")
        const invitations=await User.find({ '_id': { $in: invitationsIds.invitations }},["mail", "avatar", "username", "-_id"]);
        if(invitations){
            return res.status(200).json({invitations:invitations})
        }else{
            return  res.status(400).send('Server Error')
        }
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}
module.exports = {
    sendInvitation,
    getInvitations
};