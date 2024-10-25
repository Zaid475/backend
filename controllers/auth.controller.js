import Usermodel from "../Models/Usershcema.js";
import bcrypt from "bcrypt";

export const Login=async (req,res)=>{
try{

const{email,password}=req.body.data;
console.log("email",email,"password",password)
if(!email || !password){
    return res.send("Fill the fields")
}
const existemail= await Usermodel.findOne({email:email})
console.log(existemail);
if(!existemail){
    return res.send("Email not found Try again")
}
const passwordcheck=await bcrypt.compare(password,existemail.password)
if(!passwordcheck){
    return res.send("wrong password Try again")
}

res.send("Logged in Succesfully")


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
     return res.send("Fill all fields")
}
const emailexist=await Usermodel.findOne({email:email});
console.log(emailexist);

if(emailexist){
    return res.send("email already exists use a new one")
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
 return res.send("Registration Completed")
}
catch(error){
    res.send(error);
}
}