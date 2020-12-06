const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    pname: {
        type: String, 
        required: true, 
        max: 100
    },
    pimage: {
        type: Buffer, 
        required: true, 
        max: 200
    },
    pcategory: {
        type: String, 
        required: true, 
        max: 400
    },
    price: {
        type: String, 
        required: true, 
        max: 100
    }
});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);
