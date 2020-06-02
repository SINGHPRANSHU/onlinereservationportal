const app        =   require('express')();
const mongoose   =   require('mongoose');
const customer   =   require("./models/customer");
var bodyParser   =   require("body-parser");
const cors       =   require('cors');   

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/owner');



//routes





app.post('/customerinfo',(req,res)=>{
    customer.find({email:req.body.email},(err,users)=>{
       if(users.length<1){
        customer.create({name:req.body.name,mob:req.body.mob,email:req.body.email},(err,cust)=>{
                 if(err){res.sendStatus(500)}else{res.setHeader('Content-Type', 'application/json');
                 res.end(JSON.stringify(cust));
                 }
             });
       }else{  
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users[0]));
       }
        
     
      

            
        
    });
});



app.listen(5000,()=>{
    console.log('serer started');
    
});
