const express = require("express");
const router=express.Router();
const friendsControllers = require("../controllers/friends/friendsControllers");

router.post('/invitations',
    friendsControllers.controllers.sendInvitation
)
router.get('/invitations',
    friendsControllers.controllers.getInvitations
)
router.get('/',
    friendsControllers.controllers.getFriends
)
router.put('/invitations/accept',
    friendsControllers.controllers.acceptInvitation
)
module.exports = router;