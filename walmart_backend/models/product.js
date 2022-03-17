const {Schema, model} = require('mongoose');
//Product schema in database
const ProductSchema = Schema({
    id: {
        type: Number,
        require: [true, 'Id is required'],
        unique: true
    },
    brand: {
        type: String,
        require: [true, 'Brand is required']
    },
    description: {
        type: String,
        require: [true, 'Description is required']
    },
    image: {
        type: String,
        require: [true, 'Image is required']
    },
    price: {
        type: String,
        require: [true, 'Price is required']
    }
},{
    toObject: {
        virtuals: true
    },
        toJSON: {
        virtuals: true 
    } 
});

module.exports = model('Product', ProductSchema);
