const express = require("express");
const router=express.Router();
const friendsControllers = require("../controllers/friends/friendsControllers");
const auth = require("../middleware/auth")
router.post('/invitations',
    auth,
    friendsControllers.controllers.sendInvitation
)
router.get('/invitations',
    auth,
    friendsControllers.controllers.getInvitations
)
router.get('/',
    auth,
    friendsControllers.controllers.getFriends
)
router.put('/invitations/accept',
    auth,
    friendsControllers.controllers.acceptInvitation
)
router.put('/invitations/decline',
    auth,
    friendsControllers.controllers.declineInvitation
)
module.exports = router;