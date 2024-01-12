const {Double} =require('mongoose');
const mongoose = require('mongoose');
const db = require('../config/data_base_config');
const {Schema} = mongoose;

const billepaymentSchema = mongoose.Schema({
    cus_email:{
        type:String,
        lowercase:true,
    },
    cus_refno:{
        type:String,
    },
    cus_name:{
        type:String,
    },
    date_time:{
        type:String,
        default: new Date().toISOString(),
    },
    itemcount:{
        type:String,
    },
    item:[
       {
            name:{
                type:String
            },
            qty:{
                type:String
            },
            amount:{
                type:String
            },
        },
    ],total_amount:{
        type:String,
    },bill_no:{
        type:String,
        default:billNumberGenerate()
    }
})


function billNumberGenerate() {
    return 'BILL' + Date.now().toString(4) + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
}  

// billPaymentSchema.pre('save', function (next) {
//     const currentDate = new Date().toISOString();
//     this.date_time = currentDate;
//     next();
// });

const billRecModel =db.model('bill_records',billepaymentSchema);
module.exports = billRecModel;