const mongoose = require('mongoose');
const Instadata = mongoose.Schema({
    title :{
        type: String,
        required : true,
    },
    image :{
        type : String,
        required : true,
    } ,
       mention : {
        type : String,
        required : true,
    },
    description :{
        type : String,
        required : true,
    },
    })
module.exports = mongoose.model('instadata',Instadata)