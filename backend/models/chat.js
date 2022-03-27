const mongoose=require("mongoose");
const {ObjectId} = require("mongodb");

const chatSchema = new mongoose.Schema({
    sender: [{ type : ObjectId, ref: 'user', required: true }],
    receiver: [{ type : ObjectId, ref: 'user', required: true }],
    content:{type: 'string', required: true},
    timestamp:{type: mongoose.Schema.Types.Date, required: true,  default: Date.now},
});

module.exports =mongoose.model('chat',chatSchema)