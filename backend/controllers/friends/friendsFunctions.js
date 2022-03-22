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
      /*  resetUsers();*/
        /*await new Promise(resolve => setTimeout(resolve, 4000));*/
        const {userMail} = req.query;

        const user =await User.findOne({mail:userMail.toLowerCase()});
        if(!user)
            return  res.status(428).send("The user doesn't exist");

        let friendsIds= await User.findOne({mail: userMail}, "friends")

        friendsIds=friendsIds.friends;

        const friends= await User.find({ '_id': { $in: friendsIds }},["mail", "avatar", "username", "-_id"])


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

        const userInInvitations=await User.findOne({mail:invitationMail, invitations: user._id});

        if(!userInInvitations)
            return  res.status(428).send("The invitation doesn't exist");

        const removeFromInvitations=await User.updateOne({ mail: invitationMail}, {
            $pull: {
                invitations: user._id,
            }
        });
        const addToFriends=await User.updateOne({mail: userMail}, {
            $push:{
                friends: invitationUser._id,
            }
        });
        const addToInvitationFriends=await User.updateOne({mail: invitationMail}, {
            $push:{
                friends: user._id,
            }
        });

        if(removeFromInvitations && addToFriends && addToInvitationFriends){
            const friendsIds=[...user.friends, userInInvitations._id];
            const friends= await User.find({ '_id': { $in: friendsIds }},["mail", "avatar", "username", "-_id"])
            return res.status(200).json({friends:friends})
        }else{
            return  res.status(400).send('Server Error')
        }
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}
const declineInvitation= async (req, res)=>{
    try{
        const {userMail, invitationMail} = req.body;

        const user =await User.findOne({mail:userMail.toLowerCase()});
        const invitationUser =await User.findOne({mail:invitationMail.toLowerCase()});
        if(!user || !invitationUser)
            return  res.status(428).send("The user doesn't exist");

        const userInInvitations=await User.findOne({mail:invitationMail, invitations: user._id});

        if(!userInInvitations)
            return  res.status(428).send("The invitation doesn't exist");

        const removeFromInvitations=await User.updateOne({ mail: invitationMail}, {
            $pull: {
                invitations: user._id,
            }
        });
        if(!removeFromInvitations)
            return  res.status(400).send('Server Error')

        const invitations= await User.find({ 'invitations': user._id }, ["mail", "avatar", "username", "-_id"])
        if(!invitations)
            return  res.status(400).send('Server Error')

        return res.status(200).json({invitations: invitations})
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}
const resetUsers= async ()=>{
    try{
        const userMail="khaled@gmail.com";

        const user =await User.findOne({mail:userMail.toLowerCase()});
        const deleteFriends =await User.updateMany({mail:userMail.toLowerCase()}, { $set: { friends: [] }});
        const addInvitations=await User.updateMany({$not:{mail: userMail}}, { $set: { invitations: [user._id] }});


    }catch (e) {
        console.log(e);
    }
}
module.exports = {
    sendInvitation,
    getInvitations,
    getFriends,
    acceptInvitation,
    declineInvitation
};