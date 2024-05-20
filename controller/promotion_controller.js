const PromotionClass =require('../service/promotion_service');

exports.promoRecordeController =async(req,res,next)=>{
    try {
        const {main_title,sub_title,promotion_code,discription,promotion_date} = req.body;
        let success= await PromotionClass.promotionRequest(main_title,sub_title,promotion_code,discription,promotion_date);
        console.log('New Product Create Success');
        console.log(req.body);
        res.json({status:"200",success:"Success", message:"promotion Create Success"});
    } catch (error) {
        return error;
    }
}

//get all item data
exports.getAllPromotionRecords =async(req,res,next)=>{
    try {
        const {} =req.body;
        const promotionRec = await PromotionClass.getAllPromotionRecords();
        if (promotionRec === null) {
            return res.json({status:"201",success:"Fail", message:'No Record found'});
        }
            return res.json({status:"200",success:"success", message:'Record Founded' ,data:promotionRec});
    } catch (error) {
        res.json({status:"201",success:"error", message:error});

    }
}

//delete Promotiom
exports.deletePromotionRec =async(req,res,next)=>{
    try {
        const {promotion_code} =req.body;
        console.log(req.body);
        const promoRec = await PromotionClass.deletePromotioRec(promotion_code);
        if (promoRec === null) {
            return res.json({status:"201",success:"Fail", message:'Invailde Promotion Selected'});
        }
            return res.json({status:"200",success:"success", message:'Delete Success'});
    } catch (error) {
        res.json({status:"201",success:"error", message:error});

    }
}