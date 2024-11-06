import {Router} from "express"
import { Login, Register,UserData } from "../controllers/auth.controller.js";
const routes=Router();

routes.post("/login",Login)
routes.post("/register",Register)
routes.post("/getUserData",UserData)
export default routes;