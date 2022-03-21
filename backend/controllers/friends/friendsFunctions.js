const User = require("../../models/user");

const sendInvitation= async (req, res)=>{
    try{
        const {senderMail, receiverMail} = req.body;

        if(senderMail === receiverMail)
            return  res.status(409).send("You are lonely");

        const senderUser =await User.findOne({mail:senderMail.toLowerCase()});
        const receiverUser =await User.findOne({mail:receiverMail.toLowerCase()});

        if(!senderUser)
            return  res.status(428).send("The sender doesn't exist");
        if(!receiverUser)
            return  res.status(428).send("The receiver doesn't exist");

        
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
            return  res.status(428).send("The user doesn't exist");

        const invitations= await User.find({ 'invitations': user._id }, ["mail", "avatar", "username", "-_id"])
        if(invitations){
            return res.status(200).json({invitations:invitations})
        }else{
            return  res.status(400).send('Server Error')
        }
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}

const getFriends= async (req, res)=>{
    try{
        const {userMail} = req.query;

        const user =await User.findOne({mail:userMail.toLowerCase()});
        if(!user)
            return  res.status(428).send("The user doesn't exist");

        const friendsIds= await User.findOne({mail: userMail}, "friends")
        console.log(friendsIds);
        const friends= await User.find({ '_id': { $in: friendsIds }},["mail", "avatar", "username", "-_id"])
        console.log(friends);
        if(friends){
            return res.status(200).json({friends:friends})
        }else{
            return  res.status(400).send('Server Error')
        }
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}
const acceptInvitation= async (req, res)=>{
    try{
        const {userMail, invitationMail} = req.body;

        const user =await User.findOne({mail:userMail.toLowerCase()});
        const invitationUser =await User.findOne({mail:invitationMail.toLowerCase()});
        if(!user || !invitationUser)
            return  res.status(428).send("The user doesn't exist");

        const userInInvitations=await User.findOne({mail:userMail, invitations: invitationUser._id});

        if(!userInInvitations)
            return  res.status(428).send("The invitation doesn't exist");
       const removeFromInvitations=await User.updateOne({ mail: userMail}, {
           $pull: {
               invitations: invitationUser._id,
           }
       });
        const addToFriends=await User.updateOne({ mail: userMail}, {
            $push:{
                friends: invitationUser._id,
            }
        });
       console.log(removeFromInvitations);
       console.log(addToFriends);
        if(removeFromInvitations && addToFriends){
            return res.status(200).json({user:userInInvitations})
        }else{
            return  res.status(400).send('Server Error')
        }
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}
module.exports = {
    sendInvitation,
    getInvitations,
    getFriends,
    acceptInvitation
};