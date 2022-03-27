const express = require("express");
const router=express.Router();
const chatControllers = require("../controllers/chat/chatControllers");
const auth = require("../middleware/auth")

router.get('/',
    auth,
    chatControllers.controllers.getConversations
)
router.post('/',
    auth,
    chatControllers.controllers.sendMessage
)
module.exports = router;