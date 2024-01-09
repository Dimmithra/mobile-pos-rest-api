const ItemRecodeClass =require("../service/items_record_service");


//save item
exports.itemeRecodeController =async(req,res,next)=>{
    try {
        // const item =await ItemRecodeClass.itemDetail(itemname);
        const {itemname,itemcode,itemdescription,quantity,unitprice,manifectdate,expdate}=req.body;
        let successres =await ItemRecodeClass.itemRecRequest(itemname,itemcode,itemdescription,quantity,unitprice,manifectdate,expdate);
        console.log('New Product Create Success');
        console.log(req.body);
        const item =await ItemRecodeClass.itemDetail(itemname);
        res.json({status:"200",success:"Success", message:"New Product Create Success",item:{
            itemcode:item.itemcode,
        }});
    } catch (error) {
        console.log(error);
        res.json({status:"201",success:"error", message:error.message});
    }
}