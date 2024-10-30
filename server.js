import myexpress from "express";
import { Login, Register } from "./controllers/auth.controller.js";
import allRoutes from "./routes/index.js"
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
const app=myexpress();
app.use(myexpress.json())
app.use(cors());
dotenv.config();
mongoose.connect(process.env.MONGODBURL).then(()=>{
    console.log("mongoose connected");
})
app.get("/",(req,res)=>{
    res.send("Welcome to the Home page")
})
app.use("/api/v1",allRoutes);

// app.get("/login",Login)
// app.post("/register",Register)


app.listen(8000,()=>{
    console.log("Server is running on port no 8000")
})