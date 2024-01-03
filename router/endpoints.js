const router = require('express').Router();

const userRegController = require("../controller/client_registration_controller");
const deviceRegController = require("../controller/device_registration_controller");
router.post('/userregistration',userRegController.userRegistrationController);
router.post('/devicerecord',deviceRegController.deviceRecordController);
router.post('/login',userRegController.login);

module.exports = router;