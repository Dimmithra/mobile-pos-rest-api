const {Double}= require('mongoose');
const mongoose = require('mongoose');
const db = require('../config/data_base_config');
const bcrypt =require("bcrypt");
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
    },deviceid:{
        type:String,
        lowercase:true,
    },logtime:{
        type:String,
        lowercase:true,
    },registrationlocation:{
        type:String,
        lowercase:true,
    },clienttype:{
        type:String,
        lowercase:true,
    }
})

userRegisterSchema.pre('save',async function(next){
    try {
        var password = this;
        const salt = await(bcrypt.genSalt(10));
        const hashedPassword = await bcrypt.hash(password.password,salt);
        password.password=hashedPassword;
        next();
    } catch (error) {
        console.log(error);
    }
})

//password compare 
userRegisterSchema.methods.comparePassword = async function (userPassword) {
    try {
        console.log('Input Password:', userPassword);
        if (!this.password || !userPassword) {
            console.log('Stored Hashed Password or Input Password is undefined');
            return false;
        }
        const storedPasswordString = String(this.password);
        const userPasswordString = String(userPassword);

        const isMatch = await bcrypt.compare(userPasswordString, storedPasswordString);

        console.log('Password Match Result:', isMatch);
        return isMatch;
    } catch (error) {
        throw error;
    }
}

const userRegModel = db.model('customer_table',userRegisterSchema);
module.exports=userRegModel;