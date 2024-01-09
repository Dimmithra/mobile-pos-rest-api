const {Double}= require('mongoose');
const mongoose = require('mongoose');
const db = require('../config/data_base_config');
const {Schema} = mongoose;

const itemDetailsSchema = mongoose.Schema({
    itemname:{
        type:String,
        unique:true,
        required:true,
    },itemcode:{
        type:String,
        unique:true,
        required:true,
        default: generateItemCode,
    },itemdescription:{
        type:String,
    },quantity:{
        type:String,
    },unitprice:{
        type:String,
    },manifectdate:{
        type:String,
    },expdate:{
        type:String,
    }
})

function generateItemCode() {
    return 'item' + Date.now().toString(36) + Math.random().toString(36).substr(4, 5);
}
const itemRecModel =db.model('items_record',itemDetailsSchema);
module.exports=itemRecModel;