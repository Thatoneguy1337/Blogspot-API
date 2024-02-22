import { createPostController } from "./createPost.controllers";
import { deletePostController } from "./deletePost.controllers";
import { listAllPostUserController } from "./retrieveAllPostsUsers.controllers";
import { listAllPostsController } from "./retrievePost.controllers";
import { updatePostController } from "./updatePost.controllers";
import { retrievePostByIdController } from "./retrievePostById.controllers";
import { likePostController } from "./likePost.controllers";
import {deleteLikePostController} from "./removeLikePost.controllers";
import { listAllLikePostController } from "./retrieveLikePost.controllers";


export 
{
createPostController,
deletePostController,
listAllPostUserController,
listAllPostsController,
updatePostController,
retrievePostByIdController,
likePostController,
deleteLikePostController,
listAllLikePostController
}
