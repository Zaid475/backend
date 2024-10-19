import Usermodel from "../Models/Usershcema.js";

export const Login=(req,res)=>{
res.send("Welcome to the Login page from authcontroller.js")
}

 export const Register=async(req,res)=>{
try{
const{name,email,password,age}=req.body.Userdata;

console.log(name,email,password,age,"req.body data");
if(!name || !email || !password || !age){
     return res.send("Fill all fields")
}

const newuser=new Usermodel({
    name:name,
    email:email,
    password:password,
    age:age
   

})
console.log(newuser);
const response=await newuser.save();
console.log(response)
res.send("Welcome to register page from auth.coontroller.js")
}
catch(error){
    res.send(error);
}
}