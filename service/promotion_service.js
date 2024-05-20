const promotionModel =require('../model/promotion_campaign');

class PromotionClass{
    static async promotionRequest(main_title,sub_title,promotion_code,discription,promotion_date)
    {
        try {
            const promotionSave = new promotionModel({main_title,sub_title,promotion_code,discription,promotion_date});
            return await promotionSave.save();
        } catch (error) {
            return error;
        }
    }
    static async getAllPromotionRecords(){
        try {
            return await promotionModel.find();
        } catch (error) {
            conste.log(error);
        }
    }
    //Delete Promotion
    static async deletePromotioRec(promotion_code){
        try {
          let query = {};
          if (promotion_code) {
            query.promotion_code = promotion_code;
          }else{
            return 'Delete Fail';
          }
          return await promotionModel.deleteOne(query);
        } catch (error) {
            conste.log(error);
        }
    }
}

module.exports =PromotionClass;