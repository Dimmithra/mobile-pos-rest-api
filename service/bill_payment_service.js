const billRecModel =require('../model/bill_payment_model');

class BillPaymentClass {
    static async billPaymentRequest(cus_email,cus_refno,cus_name,date_time,itemcount,item,total_amount,bill_no){
        try {
            const saveBillPayment = new billRecModel({cus_email,cus_refno,cus_name,date_time,itemcount,item,total_amount,bill_no});
            return await saveBillPayment.save();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    //get Bill Data
    static async billDetils(bill_no,cus_email){
        try {
            // return await billRecModel.find({bill_no,cus_email});
            let query = {};

            if (bill_no) {
                query.bill_no = bill_no;
            } else if (cus_email) {
                query.cus_email = cus_email;
            } 
            // else if((query.bill_no && query.bill_no.trim() === '') || (query.cus_email && query.cus_email.trim() === '')){
            //     return 'email or bill number cannot be blank';
            //     // throw new Error('Provide either bill_no or cus_email');
            // }
            else{
                return 'Enter Valid Bill number or Email Address';
            }
            return await billRecModel.find(query);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = BillPaymentClass;