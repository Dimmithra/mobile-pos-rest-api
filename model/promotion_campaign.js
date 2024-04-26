const{Double} =require('mongoose');
const mongoose = require('mongoose');
const db = require('../config/data_base_config');
const {Schema} = mongoose;

const promotionSchema = mongoose.Schema({
    main_title:{
        type:String,
    },
    sub_title:{
        type:String,
    },
    promotion_code:{
        type:String,
        required:true,
        default:generataPromotionCode,
    },
    discription:{
        type:String,
    },
    promotion_date:{
        type:String,
    },
})

function generataPromotionCode() {
    // return 'Prom' + Date.now().toString(36) + Math.random().toString(36).substr(4, 5);
    const randomPart =Math.random().toString().substr(2, 4);
    return 'Promo' + randomPart;
}
const promotionModel = db.model('promotion_table',promotionSchema);
module.exports = promotionModel;  

