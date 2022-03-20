const mongoose=require("mongoose");
const {ObjectId} = require("mongodb");

const userSchema = new mongoose.Schema({
    username:{type: 'string',unique: true, required: true},
    mail:{type: 'string',unique: true, required: true},
    password:{type: 'string', required: true},
    friends: [{ type : ObjectId, ref: 'User' }],
    invitations: [{ type : ObjectId, ref: 'User' }],
    number:{type: 'string'},
    avatar:{type: 'string'},
});

module.exports =mongoose.model('user',userSchema)