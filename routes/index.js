import {Router} from "express";
import authRoutes from "../routes/authRoutes.js"
import Productroutes from "./productRoutes.js";
const routes=Router();
routes.use("/auth",authRoutes);
routes.use("/products",Productroutes)


export default routes;