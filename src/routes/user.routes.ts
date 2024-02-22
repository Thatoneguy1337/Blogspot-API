import { Router } from "express";
import { userSchemaRequest } from "../schemas/user.schemas";
import {
    createUserController,
    deleteUserController,
    retrieveUserController,
    updateUserController,
    retrieveUserByTokenController,
    listAllUsersController,
    forgottenPasswordController,
    newPasswordController
  } from "../controllers/user";
  

import {
    validateDataMiddleware,
    validateEmailExistsMiddleware,
    validateSocialSecurityExistsMiddleware,
    validateUserExistsMiddleware, 
    validateAuthMiddleware
} from "../middlewares/index"


  export const userRoutes: Router = Router();

  userRoutes.post("/resetPassword", forgottenPasswordController);
  userRoutes.patch("/resetPassword/:token", newPasswordController);
  userRoutes.post(
    "",
    validateDataMiddleware(userSchemaRequest),
    validateEmailExistsMiddleware,
    validateSocialSecurityExistsMiddleware,
    createUserController
  );
  userRoutes.get("",listAllUsersController)
  userRoutes.get("/profile", validateAuthMiddleware, retrieveUserByTokenController);
  userRoutes.get("/:id",validateUserExistsMiddleware, retrieveUserController);
  userRoutes.patch("/:id", validateAuthMiddleware,validateSocialSecurityExistsMiddleware, updateUserController);
  userRoutes.delete("/:id", validateAuthMiddleware, validateUserExistsMiddleware, deleteUserController);
 
  





