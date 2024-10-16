import {Router} from "express";
import authRoutes from "../routes/authRoutes.js"
const routes=Router();
routes.use("/auth",authRoutes);


export default routes;