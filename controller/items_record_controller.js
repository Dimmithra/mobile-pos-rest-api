const ItemRecodeClass =require("../service/items_record_service");


//save item
exports.itemeRecodeController =async(req,res,next)=>{
    try {
        // const item =await ItemRecodeClass.itemDetail(itemname);
        const {itemname,itemcode,itemdescription,quantity,unitprice,manifectdate,expdate,discount_available,discountrate,discountprice,dicount_issu_date,dicount_expired_date}=req.body;
        let successres =await ItemRecodeClass.itemRecRequest(itemname,itemcode,itemdescription,quantity,unitprice,manifectdate,expdate,discount_available,discountrate,discountprice,dicount_issu_date,dicount_expired_date);
        console.log('New Product Create Success');
        console.log(req.body);
        const item =await ItemRecodeClass.itemDetail(itemname);
        res.json({status:"200",success:"Success", message:"New Product Create Success",item:{
            itemcode:item.itemcode,
        }});
    } catch (error) {
        console.log(error);
        res.json({status:"201",success:"error", message:"This Item already exist"});
    }
}


//search item data 
exports.getItemsRecordsController =async(req,res,next)=>{
    try {
        const {itemname} =req.body;
        const itemRec = await ItemRecodeClass.itemDetail(itemname);
        if (itemRec === null) {
            return res.json({status:"201",success:"Fail", message:'No Record found'});
        }
            return res.json({status:"200",success:"success", message:'Record Founded' ,data:itemRec});
    } catch (error) {
        res.json({status:"201",success:"error", message:error});

    }
}