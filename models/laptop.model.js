const mongoose = require('mongoose')


const laptopSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim: true,
    },
    techSpecs: {
        type: String,
    },
    price:{
        type: Number,
        required:true,
    },
    photo: {
        type: String,
    }
}, {timestamps: true})


module.exports = mongoose.model('laptop', laptopSchema);