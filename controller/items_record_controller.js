const ItemRecodeClass =require("../service/items_record_service");


//save item
exports.itemeRecodeController =async(req,res,next)=>{
    try {
        // const item =await ItemRecodeClass.itemDetail(itemname);
        const {company_name,itemname,itemcode,itemdescription,quantity,unitprice,manifectdate,expdate,discount_available,discountrate,discountprice,new_market_price,dicount_issu_date,dicount_expired_date,image_url}=req.body;
        let successres =await ItemRecodeClass.itemRecRequest(company_name,itemname,itemcode,itemdescription,quantity,unitprice,manifectdate,expdate,discount_available,discountrate,discountprice,new_market_price,dicount_issu_date,dicount_expired_date,image_url);
        console.log('New Product Create Success');
        console.log(req.body);
        res.json({status:"200",success:"Success", message:"New Product Create Success"});

    } catch (error) {
        console.log(error);
        res.json({status:"201",success:"error", message:"This Item already exist"});
    }
}


//search item data  = itemname/company name / item no
exports.getItemsRecordsController =async(req,res,next)=>{
    try {
        const {itemname,company_name,itemcode} =req.body;
        const itemRec = await ItemRecodeClass.itemDetail(itemname,company_name,itemcode);
        if (itemRec === null) {
            return res.json({status:"201",success:"Fail", message:'No Record found'});
        }
            return res.json({status:"200",success:"success", message:'Record Founded' ,data:itemRec});
    } catch (error) {
        res.json({status:"201",success:"error", message:error});

    }
}

//get all item data
exports.getAllItems =async(req,res,next)=>{
    try {
        const {itemname} =req.body;
        const itemRec = await ItemRecodeClass.getAllItemData(itemname);
        if (itemRec === null) {
            return res.json({status:"201",success:"Fail", message:'No Record found'});
        }
            return res.json({status:"200",success:"success", message:'Record Founded' ,data:itemRec});
    } catch (error) {
        res.json({status:"201",success:"error", message:error});

    }
}