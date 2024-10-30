import Usermodel from "../Models/Usershcema.js";
import bcrypt from "bcrypt";

export const Login=async (req,res)=>{
try{

const{email,password}=req.body.Userdata;
console.log("email",email,"password",password)
if(!email || !password){
    return res.json({message:"Fill the fields", success:false})
}
const existemail= await Usermodel.findOne({email:email})
console.log(existemail);
if(!existemail){
    return res.json({message:"Email not found Try again",success:false})
}
const passwordcheck=await bcrypt.compare(password,existemail.password)
if(!passwordcheck){
    return res.json({message:"wrong password Try again",success:false})
}

return res.json({
    message:"Login Successful",
    success:true,
    Userdata:{
        email:existemail.email,password:existemail.password,name:existemail.name
    }



});




}
catch(error){
    console.log(error);

}
}

 export const Register=async(req,res)=>{
try{
const{name,email,password,age}=req.body.Userdata;

console.log(name,email,password,age,"req.body data");
if(!name || !email || !password || !age){
     return res.json({message:"Fill all fields",success:false})
}
const emailexist=await Usermodel.findOne({email:email});
console.log(emailexist);

if(emailexist){
    return res.json({message:"Email already exists",success:false})
}
const hashedpassword= await bcrypt.hash(password,10);
console.log(hashedpassword);




const newuser=new Usermodel({
    name:name,
    email:email,
    password:hashedpassword,
    age:age
   

})
console.log(newuser);
const response=await newuser.save();
console.log(response)
 return res.json({message:"Registration completed",success:true})
}
catch(error){
    res.json({message:error,success:false});
}
}