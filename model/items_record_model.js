const {Double}= require('mongoose');
const mongoose = require('mongoose');
const db = require('../config/data_base_config');
const {Schema} = mongoose;

const itemDetailsSchema = mongoose.Schema({
    company_name:{
        type:String,
        required:true,
    },
    itemname:{
        type:String,
        unique:true,
        required:true,
    },itemcode:{
        type:String,
        required:true,
        default:generateItemCode,
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
    },discount_available:{
        type:Boolean,
    },discountrate:{
        type:String,
    },discountprice:{
        type:String,
    },new_market_price:{
        type:String,
    },
    dicount_issu_date:{
        type:String,
    },dicount_expired_date:{
        type:String,
    },image_url:{
        type:String,
    }
})

function generateItemCode() {
    // const randomPart = Math.random().toString().substr(2, 4);
    return 'ProduCode-' + Math.random().toString(36).substr(4, 5);
}
const itemRecModel =db.model('items_record',itemDetailsSchema);
module.exports=itemRecModel;