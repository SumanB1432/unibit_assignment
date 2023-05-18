const tambolaModel = require("../../model/tambolaModel")
async function getTickets(req,res){
    try {

        let page= parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit)||5;

        let skip = (page-1)*limit;

        
        let getTicket = await tambolaModel.find().skip(skip).limit(limit);
        return res.status(200).send({status:true,page_NO:page,number_Of_Documents:getTicket.length,data:getTicket})

        
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
        
    }

}
module.exports.getTickets = getTickets