const router = require('express').Router();

const userRegController = require("../controller/client_registration_controller");
const deviceRegController = require("../controller/device_registration_controller");
router.post('/userregistration',userRegController.userRegistrationController);
router.post('/devicerecord',deviceRegController.deviceRecordController);


module.exports = router;