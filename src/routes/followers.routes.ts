import { Router } from "express";
import { followerSchemaRequest } from "../schemas/follower.schemas";


import {
   createFollowerController,
   deleteFollowerController,
   listAllFollowerControler
} from "../controllers/followers"

import 
{
validateDataMiddleware,
validateEmailExistsMiddleware,
validateSocialSecurityExistsMiddleware,
validateUserExistsMiddleware,
validateUserOwnerMiddleware,
validateAuthMiddleware,
validateOwnerPostMiddleware,
validatePostExistsMiddleware
 } from "../middlewares/index"

export const followRoutes: Router = Router();

followRoutes.get("/:id",listAllFollowerControler);
followRoutes.post("/add/:userId/:followerId", validateAuthMiddleware, createFollowerController);
followRoutes.delete("/unfollow/:id", validateAuthMiddleware, deleteFollowerController);











