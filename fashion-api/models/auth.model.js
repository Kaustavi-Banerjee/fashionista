const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AuthSchema = new Schema({
    email: {
        type: String, 
        required: true, 
        max: 100
    },
    ptype: {
        type: String, 
        required: true
    },
    pwd: {
        type: String, 
        required: true
    }
});

// Export the model
module.exports = mongoose.model('Auth', AuthSchema);
