import { Router } from "express";
import { 
    createThreadController, 
    updateThreadController, 
    deleteThreadController, 
    listAllPostThreadsController} from "../controllers/threads";


import { 
    validateAuthMiddleware, 
    validateDataMiddleware, 
    validateThreadExistsMiddleware,
    validateIsOwnerThreadMiddleware,
 } from "../middlewares";

import { threadSchemaRequest, 
    threadSchemaUpdate } from "../schemas/threads.schemas";


    export const threadRoutes: Router = Router();

    threadRoutes.get(
        "/:id",
        validateThreadExistsMiddleware,
        listAllPostThreadsController
      );
      threadRoutes.post(
        "/:id",
        validateAuthMiddleware,
        validateThreadExistsMiddleware,
        validateDataMiddleware(threadSchemaRequest),
        createThreadController
      );
      threadRoutes.use(
        "/:id",
        validateAuthMiddleware,
        validateThreadExistsMiddleware,
        validateIsOwnerThreadMiddleware
      );
      threadRoutes.patch(
        "/:id",
        validateDataMiddleware(threadSchemaUpdate),
        updateThreadController
      );
      threadRoutes.delete("/:id", deleteThreadController);








