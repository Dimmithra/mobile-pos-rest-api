const devicerecoredmodel = require('../model/device_record_model');

class DeviceRecordClass{
    static async deviceRecRequest(devieid,devicemake,deviemodel,location,time,cus_code){
        try {
            const deviceRecordSave = new devicerecoredmodel({devieid,devicemake,deviemodel,location,time,cus_code});
            return await deviceRecordSave.save();
        } catch (error) {
            console.log("Device Record Error" +error);
            throw error;
        }
    }
    
}

module.exports = DeviceRecordClass;