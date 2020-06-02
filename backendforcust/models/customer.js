var mongoose   =    require("mongoose");


var customerSchema=new mongoose.Schema({
   name:String,
   mob:String,
   email:String,
   reservation:[{appoinment:String}]
    
 });

 module.exports=mongoose.model("user",customerSchema);