import { Router } from "express";
import { postSchemaRequest, postSchemaUpdate } from "../schemas/post.schemas";

import { 
    createPostController, 
    listAllPostUserController, 
    listAllPostsController,
    updatePostController,
    deletePostController,
    retrievePostByIdController,
    likePostController
} from "../controllers/post";

import 
{
validateDataMiddleware,
validateEmailExistsMiddleware,
validateSocialSecurityExistsMiddleware,
validateUserExistsMiddleware,
validateUserOwnerMiddleware,
validateAuthMiddleware,
validateOwnerPostMiddleware,
validatePostExistsMiddleware,
checkLikePermission 
 } from "../middlewares/index"

export const postRoutes: Router = Router();

postRoutes.get("", listAllPostsController);
postRoutes.get("/:id", retrievePostByIdController);
postRoutes.get("/user/publications/:id", listAllPostUserController);
postRoutes.use(validateAuthMiddleware);
postRoutes.post(
  "",
  validateDataMiddleware(postSchemaRequest),
  createPostController
);

postRoutes.patch("/posts/:id/like", likePostController);

postRoutes.patch(
  "/:id",
  validateDataMiddleware(postSchemaUpdate),
  updatePostController
  );
postRoutes.delete("/:id", validateOwnerPostMiddleware, deletePostController);
  
postRoutes.use("/:id", validatePostExistsMiddleware, validateUserOwnerMiddleware);
