const BillPaymentClass = require('../service/bill_payment_service');

 exports.saveBillRecords =async(req,res,next)=>{
    try {
        const {cus_email,cus_refno,cus_name,date_time,itemcount,item,total_amount,bill_no} = req.body;
        // const billNumber = await billNumberGenerate();
        let successBill =await BillPaymentClass.billPaymentRequest(cus_email,cus_refno,cus_name,date_time,itemcount,item,total_amount,bill_no);
        console.log('New bill payment Success');
        console.log(req.body);
        // const billRecord =await BillPaymentClass.billDetils(bill_no);
          res.json({status:"200",success:"Success", message:"Bill payment Success"});
    } catch (error) {
        console.log(error);
        res.json({status:"201",success:"fail", message:"Bill payment fail"});
    }
}

//search bill record email/bill no
exports.getBillRecord =async(req,res,next)=>{
    try {
        const {bill_no,cus_email} = req.body;
        console.log(req.body)
        const billRec = await BillPaymentClass.billDetils(bill_no,cus_email);
        // if (!billRec ||billRec.length === 0) {
        //     return res.json({status:"200",success:"success", message:'email No or Bill Number cannot be blank'});
        // }
        return res.json({status:"200",success:"success", message:'Record Founded' ,data:billRec});
    } catch (error) {
        console.log(error);
        res.json({status:"201",success:"fail", message:error});
    }
}