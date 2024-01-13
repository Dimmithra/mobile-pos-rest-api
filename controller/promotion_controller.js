const PromotionClass =require('../service/promotion_service');

exports.promoRecordeController =async(req,res,next)=>{
    try {
        const {main_title,sub_title,promotion_code,discription,promotion_date,other_comments} = req.body;
        let success= await PromotionClass.promotionRequest(main_title,sub_title,promotion_code,sub_title,discription,promotion_date,other_comments);
        console.log('New Product Create Success');
        console.log(req.body);
        res.json({status:"200",success:"Success", message:"promotion Create Success"});
    } catch (error) {
        return error;
    }
}