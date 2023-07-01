const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const port = process.env.PORT || 4000;
app.set('view engine', 'ejs');
const mongoose=require("mongoose");
const mongoURI="mongodb://localhost:27017/jmd";
mongoose.connect(mongoURI);
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true
    },
    Contact_No:{
        type:String,
        required:true,
        unique:true
    },program:{
        type:String,
        required:true
    }
})
const user= mongoose.model("user",userSchema);

   
app.post("/login",function(req,res){
    const name=req.body.name;
    const email=req.body.email;
    const state=req.body.state;
    const contact_no=req.body.ph;
    const password=req.body.pass;
    const program=req.body.program;
    mongoose.set("strictQuery", true);

    bcrypt.hash(password, saltRounds, function(err, hash) {
                        const newUser=new user({
                            name:name,
                            email:email,
                            state:state,
                            Contact_No:contact_no,
                            password:hash,
                            program:program
                        });
                        newUser.save(function(err){
                            if(err)res.send(err);
                            else res.render("ssuccess",{name:name});
                        });
                           
    });
})
app.post("/signup",function(req,res){
    const email=req.body.em;
    const password=req.body.pw;
   user.findOne({email},function(err,found){
    if(err){
        res.render("failure");
    }
    else {
        if(found){
            bcrypt.compare(password, found.password, function(err, result) {
                // result == true
                if(result===true){
                    res.render("lsuccess",{name:found.name,email:found.email,Number:found.Contact_No,state:found.state,program:found.program});

                }
                else{
                    res.render("failure");
                }
            })
        }
    }
   })

})

app.get('/signup', (req, res) => {
    res.render('Login');
  });
  app.get('/login', (req, res) => {
    res.render('Signup');
  });
app.listen(4000,function(){
console.log("Server Is Running On Port 4000");
})