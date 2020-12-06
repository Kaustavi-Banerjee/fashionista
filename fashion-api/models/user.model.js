const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    uname: {
        type: String, 
        required: true, 
        max: 100
    },
    uemail: {
        type: String, 
        required: true
    },
    pwd: {
        type: String, 
        required: true
    }
});

// Export the model
module.exports = mongoose.model('User', UserSchema);
