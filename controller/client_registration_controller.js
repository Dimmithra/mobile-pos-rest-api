// const { use } = require('bcrypt/promises');
const { json } = require('express');
const UserRegisterServiceClass = require('../service/client_registration_service');

exports.userRegistrationController =async(req,res,next)=>{
    try{
        const {customername,mobileno,address,email,password,deviceid,logtime,registrationlocation} = req.body;
        let sussessRes =await UserRegisterServiceClass.userRegRequest(customername,mobileno,address,email,password,deviceid,logtime,registrationlocation);
        console.log('Customer Registration success');
        console.log(req.body);
        res.json({status:"200",success:"Success", message:"Thank You! Your Registration Process Success"});
        
    }catch(error){
        console.log(error);
        res.json({status:"201",success:"Fail", message:"Your Registration Process Fail This Mobile Number Already Registered" });
    }
}
exports.login =async(req,res,next)=>{
    try {
        const {email,password} = req.body;
        console.log('password---'+password);
        const user =await UserRegisterServiceClass.checkUser(email);
        console.log('Email---'+email);
        const isMatch =await user.comparePassword(password);
        if (!user) {
            console.log("user Invalid");
            res.json({status:"201",success:"Fail", message:'invalid Email Address'});
        }else if(!isMatch){
            console.log("Password Invalid");
            res.json({status:"201",success:"Fail", message:'Password Invalid'});
        } else {
            res.json({status:"200",success:"success", message:'Login Success'});
        }
    } catch (error) {
        console.log(error);
        res.json({status:"201",success:"Fail", message:'Invalider Email and Password'});
    }
}