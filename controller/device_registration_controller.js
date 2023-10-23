const DeviceRecordClass = require('../service/device_record_service');

exports.deviceRecordController =async(req,res,next)=>{
    try {
        const {devieid,devicemake,deviemodel,location,time,cus_code}= req.body;
        let sussessRes = await DeviceRecordClass.deviceRecRequest(devieid,devicemake,deviemodel,location,time,cus_code);
        console.log('device save success');
        console.log(req.body);
        res.json({status:"200",success:"Success", message:"Registration Success"});
    } catch (error) {
        console.log(error);
        res.json({status:"201",success:"error", message:"Registration Success"});
    }
}