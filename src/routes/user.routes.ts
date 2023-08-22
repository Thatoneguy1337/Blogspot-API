import { Router } from "express";
import { userSchemaRequest } from "../schemas/user.schemas";
import {
    createUserController,
    deleteUserController,
    retrieveUserController,
    updateUserController,
    retrieveUserByTokenController,
    listAllUsersController
  } from "../controllers/user";
  
import {
    validateDataMiddleware,
    validateEmailExistsMiddleware,
    validateSocialSecurityExistsMiddleware,
    validateUserExistsMiddleware, 
    validateAuthMiddleware,
    validateUserOwnerMiddleware
} from "../middlewares/index"


  export const userRoutes: Router = Router();

  
  userRoutes.post(
    "",
    validateDataMiddleware(userSchemaRequest),
    validateEmailExistsMiddleware,
    validateSocialSecurityExistsMiddleware,
    createUserController
  );
  userRoutes.get("",validateAuthMiddleware,listAllUsersController)
  userRoutes.get("/profile", validateAuthMiddleware, retrieveUserByTokenController);
  userRoutes.get("/:id", validateUserExistsMiddleware, retrieveUserController);
  userRoutes.use(
    "/:id",
    validateAuthMiddleware,
    validateUserExistsMiddleware,
    validateUserOwnerMiddleware,
  );
  userRoutes.patch("/:id", validateSocialSecurityExistsMiddleware, updateUserController);
  userRoutes.delete("/:id", deleteUserController)
  






