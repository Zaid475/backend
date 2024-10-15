const myemitter=require("events")
 const myeventemitter=new myemitter();
  myeventemitter.on("hi",(data)=>{
    console.log(`this is ${data}`)
  })
  myeventemitter.emit("hi","zaid");