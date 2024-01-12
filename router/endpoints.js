const router = require('express').Router();

const userRegController = require("../controller/client_registration_controller");
const deviceRegController = require("../controller/device_registration_controller");
const itemController = require("../controller/items_record_controller");
const saveBillController = require("../controller/bill_payment_controller");

router.post('/userregistration',userRegController.userRegistrationController);
router.post('/devicerecord',deviceRegController.deviceRecordController);
router.post('/login',userRegController.login);
router.post('/itemsave',itemController.itemeRecodeController);
router.get('/getItem',itemController.getItemsRecordsController);
router.get('/getAllItemRecord',itemController.getAllItems);
router.post('/billPayment',saveBillController.saveBillRecords);
router.get('/getbillRecord',saveBillController.getBillRecord);

module.exports = router;