const promotionModel =require('../model/promotion_campaign');

class PromotionClass{
    static async promotionRequest(main_title,sub_title,promotion_code,discription,promotion_date,other_comments)
    {
        try {
            const promotionSave = new promotionModel({main_title,sub_title,promotion_code,discription,promotion_date,other_comments});
            return await promotionSave.save();
        } catch (error) {
            return error;
        }
    }
}

module.exports =PromotionClass;