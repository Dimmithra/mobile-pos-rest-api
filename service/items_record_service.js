const itemRecModel = require('../model/items_record_model');

class ItemRecodeClass{
    static async itemRecRequest(company_name,itemname,itemcode,itemdescription,quantity,unitprice,manifectdate,expdate,discount_available,discountrate,discountprice,new_market_price,dicount_issu_date,dicount_expired_date){
        try {
            const itemRecSave = new itemRecModel({company_name,itemname,itemcode,itemdescription,quantity,unitprice,manifectdate,expdate,discount_available,discountrate,discountprice,new_market_price,dicount_issu_date,dicount_expired_date});
            return await itemRecSave.save();
        } catch (error) {
            console.log("Item Record Error" +error);
            // throw error;
            return error;
        }
    } 
    //get item data - item name
    static async itemDetail(itemname){
        try {
            return await itemRecModel.findOne({itemname});
        } catch (error) {
            console.log(error);
        }
    }
    // get all item data
    static async getAllItemData(){
        try {
            return await itemRecModel.find();
        } catch (error) {
            conste.log(error);
        }
    }
   
}
module.exports =ItemRecodeClass;