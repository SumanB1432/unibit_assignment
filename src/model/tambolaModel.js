const mongoose = require("mongoose");

const tambolaSchema = new mongoose.Schema({
      Tambola_tickets:{
        type:Array,
        required:true,
      }
 
}, { timestamps: true })

module.exports = mongoose.model('Tambola', tambolaSchema)