import { Schema,model } from "mongoose";

const Userschema=new Schema({
    name:String,
    email:String,
    password:{type:String,required:true},
    age:String


})

const Usermodel=model("Usermodel",Userschema);

export default Usermodel;