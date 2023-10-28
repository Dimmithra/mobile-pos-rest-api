const {Double}= require('mongoose');
const mongoose = require('mongoose');
const db = require('../config/data_base_config');
const bycrypt =require("bcrypt");
const {Schema} = mongoose;

const userRegisterSchema = mongoose.Schema({
    customername:{
        type:String,
        lowercase:true,
    },mobileno:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
    },address:{
        type:String,
        lowercase:true,
    },email:{
        type:String,
        lowercase:true,
    },password:{
        type:String,
        lowercase:true,
    },deviceid:{
        type:String,
        lowercase:true,
    },logtime:{
        type:String,
        lowercase:true,
    }
})

userRegisterSchema.pre('save',async function(){
    try {
        var password = this;
        const salt = await(bycrypt.genSalt(10));
        const hasBlood = await bycrypt.hash(password.password,salt);

        password.password=hasBlood;
    } catch (error) {
        console.log(error);
    }
})

const userRegModel = db.model('customer_table',userRegisterSchema);
module.exports=userRegModel;