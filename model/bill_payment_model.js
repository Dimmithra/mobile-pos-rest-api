const { Double } = require('mongoose');
const mongoose = require('mongoose');
const db = require('../config/data_base_config');
const { Schema } = mongoose;

const billepaymentSchema = mongoose.Schema({
    cus_email: {
        type: String,
        lowercase: true,
    },
    cus_mobileno: {
        type: String,
    },
    cus_name: {
        type: String,
    },
    date_time: {
        type: String,
        default: new Date().toISOString(),
    },
    itemcount: {
        type: String,
    },
    item: [
        {
            itemcode: {
                type: String
            },
            name: {
                type: String
            },
            qty: {
                type: String
            },
            amount: {
                type: String
            },
            discount_price: {
                type: String
            },
            itemTotal: {
                type: String
            },
        },
    ], total_amount: {
        type: String,
    }, tdiscount_amount: {
        type: String,
    }, subtotal: {
        type: String,
    },
    bill_no: {
        type: String,
        required:true,
        default: billNumberGenerate
    }
})


function billNumberGenerate() {
    return 'BILLID' + Math.random().toString(36).substr(5, 8);
    // return 'BILLID' + Math.random().toString(36).substr(3, 5);
}

// billPaymentSchema.pre('save', function (next) {
//     const currentDate = new Date().toISOString();
//     this.date_time = currentDate;
//     next();
// });

const billRecModel = db.model('bill_records', billepaymentSchema);
module.exports = billRecModel;