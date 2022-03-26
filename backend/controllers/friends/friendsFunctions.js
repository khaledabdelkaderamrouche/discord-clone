const User = require("../../models/user");
const { emitNewInvitation, emitAcceptedInvitation } = require("../../sockerServer");

const sendInvitation= async (req, res)=>{
    try{
        const {receiverMail} = req.body;
        const senderMail = req.user.mail;

        if(senderMail === receiverMail)
            return  res.status(409).send("You are lonely");

        const senderUser =await User.findOne({mail:senderMail.toLowerCase()},["mail", "avatar", "username"]);
        const receiverUser =await User.findOne({mail:receiverMail.toLowerCase()});



        if(!senderUser)
            return  res.status(428).send("The sender doesn't exist");
        if(!receiverUser)
            return  res.status(428).send("The receiver doesn't exist");


        const updated= await User.updateOne({mail: receiverMail}, {$addToSet: {invitations: senderUser._id}})

        if(!updated.modifiedCount)
            return  res.status(409).send('You already sent an invitation to this user.')

        if(!updated.acknowledged)
            return  res.status(400).send('Server Error')


        const {_id,...senderUserWithoutId}=senderUser._doc
        emitNewInvitation (receiverUser._id, senderUserWithoutId);

        return res.status(200).send('The invitation was sent to the user.')

    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}
const getInvitations= async (req, res)=>{
    try{
        const userMail = req.user.mail;

        const user =await User.findOne({mail:userMail.toLowerCase()}).populate({ path: 'invitations', select: 'username avatar mail -_id'});

        if(!user)
            return  res.status(428).send("The user doesn't exist");


        const invitations= user.invitations;


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
        resetUsers();
        //await new Promise(resolve => setTimeout(resolve, 4000));
        const userMail = req.user.mail;

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
    await handleInvitation(req, res, true)
}
const declineInvitation= async (req, res)=>{
    await handleInvitation(req, res, false)
}
const handleInvitation= async (req, res, isAccept)=>{
    try{
        const {invitationMail} = req.body;
        const userMail = req.user.mail;

        const user =await User.findOne({mail:userMail.toLowerCase()}, ["mail", "avatar", "username", "friends"]);
        const invitationUser =await User.findOne({mail:invitationMail.toLowerCase()}, ["mail", "avatar", "username"]);


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
        if(isAccept){
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
            if(!addToFriends || !addToInvitationFriends)
                return  res.status(400).send('Server Error')

            const {_id, friends, ...userWithoutId}=user._doc

            emitAcceptedInvitation (invitationUser._id, userWithoutId);
        }
        if(!removeFromInvitations)
            return  res.status(400).send('Server Error')

        const friendsIds=[...user.friends, invitationUser._id];
        const friends= await User.find({ '_id': { $in: friendsIds }},["mail", "avatar", "username", "-_id"])
        const userWithInvitations= await User.findOne({mail:userMail.toLowerCase()}).populate({ path: 'invitations', select: 'username avatar mail -_id'});
        const invitations=userWithInvitations.invitations;
        console.log("khaled@gmail.com");
        console.log("invitations");
        console.log(invitations);
        if(!invitations)
            return  res.status(400).send('Server Error')

        return res.status(200).json({friends:friends, pendingInvitations: invitations})
    }catch (e) {
        return res.status(500).send('Error: ' + e.message)
    }
}
const resetUsers= async ()=>{
    try{
        const userMail="khaled@gmail.com";

        const user =await User.findOne({mail:userMail.toLowerCase()});

        const deleteFriends =await User.updateMany({ $set: { friends: [] }});
        // const addInvitations=await User.updateMany({$not:{mail: userMail}}, { $set: { invitations: [user._id] }});
        const addInvitations=await User.updateMany({ $set: { invitations: [] }});


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