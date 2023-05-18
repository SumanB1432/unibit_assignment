const tambolaModel = require("../../model/tambolaModel")
async function getTickets(req,res){
    try {
        let getTicket = await tambolaModel.find();
        return res.status(200).send({status:true,data:getTicket})
        
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
        
    }

}
module.exports.getTickets = getTickets