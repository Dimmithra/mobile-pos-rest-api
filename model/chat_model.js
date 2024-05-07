const { Double } = require('mongoose');
const mongoose = require('mongoose');
const db = require('../config/data_base_config');
const { Schema } = mongoose;

const chatSchemaM = mongoose.Schema({
    messages: [
        {
            cusemail: {
                type: String,
            },
            cusname: {
                type: String,
            },
            message:{
                type: String,
            },
            date:{
                type: String,
            },
            time:{
                type: String,
            },
        }
    ]
})

const messageModel =db.model('chat_table',chatSchemaM);
module.exports=messageModel;