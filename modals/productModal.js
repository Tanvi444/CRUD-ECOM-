const mongoose= require("mongoose");
const productSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter product Description"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter product Price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    ratings:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        required:[true,"Please Enter product category"],
    },
})
module.exports = mongoose.model("Product",productSchema);