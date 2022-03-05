const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    username:{type: 'string',unique: true},
    mail:{type: 'string',unique: true},
    password:{type: 'string'}
});

module.exports =mongoose.model('user',userSchema)