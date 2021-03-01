const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {type: String, require: true},
    lastname: {type: String, require: true},
    username: {type: String, require: true, unique:true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true, minlength: 6},
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;