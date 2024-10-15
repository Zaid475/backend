const httpmodule=require("http");
const server=httpmodule.createServer((req,res)=>{
    if(req.method=="GET" && req.url=="/"){
        res.end("welcome to backend")
    }
    else{
        res.end("wrong url")
    }

});
server.listen(8000,()=>{
    console.log("server running on port 8000")
})

