const UserRegisterServiceClass = require('../service/client_registration_service');

exports.userRegistrationController =async(req,res,next)=>{
    try{
        const {customername,mobileno,address,email,password,deviceid,location,logtime} = req.body;
        let sussessRes =await UserRegisterServiceClass.userRegRequest(customername,mobileno,address,email,password,deviceid,location,logtime);
        console.log('Customer Registration success');
        console.log(req.body);
        res.json({status:"200",success:"Success", message:"Registration Success"});
        
    }catch(error){
        console.log(error);
    }
}