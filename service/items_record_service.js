const itemRecModel = require('../model/items_record_model');

class ItemRecodeClass{
    static async itemRecRequest(company_name,itemname,itemcode,itemdescription,quantity,unitprice,manifectdate,expdate,discount_available,discountrate,discountprice,new_market_price,dicount_issu_date,dicount_expired_date,image_url){
        try {
            const itemRecSave = new itemRecModel({company_name,itemname,itemcode,itemdescription,quantity,unitprice,manifectdate,expdate,discount_available,discountrate,discountprice,new_market_price,dicount_issu_date,dicount_expired_date,image_url});
            return await itemRecSave.save();
        } catch (error) {
            console.log("Item Record Error" +error);
            // throw error;
            return error;
        }
    } 
    //get item data - item name
    static async itemDetail(itemname,company_name,itemcode){
        try {
            let query ={};
            if (itemname) {
                query.itemname = itemname;
            }else if(company_name){
                query.company_name =company_name;
            } else if(itemcode){
                query.itemcode = itemcode;
            } 
            else {
                return 'No record Founded';
            }
            return await itemRecModel.find(query);
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
    //delet Item
    static async deleteSelectedItem(itemcode){
        try {
            let query = {};
            if (itemcode) {
                query.itemcode = itemcode;
            }else {
                return 'Delete  Fail';
            }
            return await itemRecModel.deleteOne(query);
            // itemRecModel.deleteOne().;
        } catch (error) {
            conste.log(error);
        }
       
    }
    
   
}
module.exports =ItemRecodeClass;