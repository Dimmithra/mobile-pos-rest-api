const ChatDataClass =require('../service/chat_services');

exports.sendNewChatMessage=async(req,res,next)=>{
    try {
        const {messages} = req.body;
        let successSendMessage = await ChatDataClass.ChatDataClassRequest(messages);
        console.log(req.body);
        res.json({status:"200",success:"Success", message:"Message Send Success"});
    
    } catch (error) {
        console.log(error);
        res.json({status:"201",success:"fail", message:"Bill payment fail"});

    }

}

exports.getAllMessageRecords =async(req,res,next)=>{
    try {
        const {} =req.body;
        const chatRecord = await ChatDataClass.getAllChatRecords();
        if (chatRecord === null) {
            return res.json({status:"201",success:"Fail", message:'No Chat found'});
        }
            return res.json({status:"200",success:"success", message:'Record Founded' ,data:chatRecord});
    } catch (error) {
        res.json({status:"201",success:"error", message:error});

    }
}
