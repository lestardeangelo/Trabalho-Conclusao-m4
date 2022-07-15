import { Router } from "express";
import { listPostController } from "../controllers/posts/listPost.controller";
import updatePostController from "../controllers/posts/updatePost.controller";

const postsRoutes = Router()

postsRoutes.patch(":id", updatePostController)
postsRoutes.get("", listPostController)

export default postsRoutes