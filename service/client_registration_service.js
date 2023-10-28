const userRegModel = require('../model/client_registration_model');

class UserRegisterServiceClass{
    static async userRegRequest(customername,mobileno,address,email,password,deviceid,logtime){
        try{
                const createUserRegistration= new userRegModel({customername,mobileno,address,email,password,deviceid,logtime});
                return await createUserRegistration.save();
                         
        }catch(error){
               console.log("User Reg Serveicer:"+error); 
               throw error;
        }
    }
}

module.exports = UserRegisterServiceClass;