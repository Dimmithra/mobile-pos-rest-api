const {Double}= require('mongoose');
const mongoose = require('mongoose');
const db = require('../config/data_base_config');
const bycrypt =require("bcrypt");
const {Schema} = mongoose;

const deviceRecSchema = mongoose.Schema({
    devieid:{
        type:String,
    },devicemake:{
        type:String,
    },deviemodel:{
        type:String,
    },location:{
        type:String,
    },time:{
        type:String,
    },cus_code:{
        type:String,
       
    },logign_status:{
        type:String,  
    }
})


const devicerecoredmodel = db.model('device_rec_table',deviceRecSchema);
module.exports=devicerecoredmodel;