const userRegModel = require('../model/client_registration_model');

class UserRegisterServiceClass{
    static async userRegRequest(customername,mobileno,address,email,password,deviceid,logtime,registrationlocation){
        try{
                const createUserRegistration= new userRegModel({customername,mobileno,address,email,password,deviceid,logtime,registrationlocation});
                return await createUserRegistration.save();
                         
        }catch(error){
               console.log("User Reg Serveicer:"+error); 
               throw error;
        }
    }
    static async checkUser(email){
        try {
            return await userRegModel.findOne({email});
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserRegisterServiceClass;