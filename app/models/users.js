let mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    profesion: {
        type: String
    }
},
{ 
    timestamps: true,
    versionKey: false,
}) 
module.exports = mongoose.model('users', UserSchema) 
