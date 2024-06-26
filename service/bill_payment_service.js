const billRecModel =require('../model/bill_payment_model');

class BillPaymentClass {
    static async billPaymentRequest(cus_email,cus_mobileno,cus_name,date_time,itemcount,item,total_amount,tdiscount_amount,subtotal,bill_no){
        try {
            const saveBillPayment = new billRecModel({cus_email,cus_mobileno,cus_name,date_time,itemcount,item,total_amount,tdiscount_amount,subtotal,bill_no});
            return await saveBillPayment.save();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    //get Bill Data
    static async billDetils(bill_no,cus_email,cus_mobileno){
        try {
            // return await billRecModel.find({b ill_no,cus_email});
            let query = {};

            if (bill_no) {
                query.bill_no = bill_no;
            } else if (cus_email) {
                query.cus_email = cus_email;
            } else if (cus_mobileno) {
                query.cus_mobileno = cus_mobileno;
            }
            // else if((query.bill_no && query.bill_no.trim() === '') || (query.cus_email && query.cus_email.trim() === '')){
            //     return 'email or bill number cannot be blank';
            //     // throw new Error('Provide either bill_no or cus_email');
            // }
            else{
                return 'Enter Valid Bill number or Email Address';
            }

            // if (result.length ===  
            //     0) {
            //     return 'No matching records found.';
            // }
            return await billRecModel.find(query);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = BillPaymentClass;