const messageModel =require('../model/chat_model');

class ChatDataClass{
    static async ChatDataClassRequest(messages){
        try {const sendChatData = messageModel({messages});
        return await sendChatData.save();
            
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    static async getAllChatRecords(){
        try {
            return await messageModel.find();
        } catch (error) {
            throw error;
            conste.log(error);
        }
    }
}



module.exports = ChatDataClass;