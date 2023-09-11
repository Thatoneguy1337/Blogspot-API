import { Router } from "express";
import { loginController } from "../controllers/login/loginUser.controllers";
import { TLoginRequest } from "../interfaces/login.interfaces";



export const loginRoutes: Router = Router();

loginRoutes.post("", loginController);

