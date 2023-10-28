const UserRegisterServiceClass = require('../service/client_registration_service');

exports.userRegistrationController =async(req,res,next)=>{
    try{
        const {customername,mobileno,address,email,password,deviceid,logtime} = req.body;
        let sussessRes =await UserRegisterServiceClass.userRegRequest(customername,mobileno,address,email,password,deviceid,logtime);
        console.log('Customer Registration success');
        console.log(req.body);
        res.json({status:"200",success:"Success", message:"Thank You! Your Registration Process Success"});
        
    }catch(error){
        console.log(error);
        res.json({status:"201",success:"Fail", message:"Your Registration Process Fail This Mobile Number Already Registered" });
    }
}