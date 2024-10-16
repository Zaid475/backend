export const Login=(req,res)=>{
res.send("Welcome to the Login page from authcontroller.js")
}

 export const Register=(req,res)=>{
console.log("register api")
res.send("Welcome to register page from auth.coontroller.js")
console.log(req.body,"req.body data")
}