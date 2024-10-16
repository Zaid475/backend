const myexpress=require("express");
const app=myexpress();
app.get("/",((req,res)=>{
    res.send("Welcome to the Home page")
}))

app.get("/login",((req,res)=>{
    res.send("Welcome to the Login page")
}))


app.listen(8000,()=>{
    console.log("Server is running on port no 8000")
})