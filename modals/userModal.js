const mongoose= require("mongoose");
const validater = require("validator");
const userSchema = new mongoose.Schema({
    name:{
            type:String,
            required:[true,"Please Enter product Name"],
    },
    email:{
            type:String,
            required:[true,"Please Enter Your Email"],
            unique:true,
            validate:[validater.isEmail,"Please Enter a valid Email"]
    },
    password:{
            type:String,
            required:[true,"Please Enter Your Password"],
            minLength:[8,"Password should be more than 8 characters"],
            select:false
    },
})
module.exports = mongoose.model("User",userSchema);



