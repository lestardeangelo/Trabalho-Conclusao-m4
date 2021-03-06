import { Router } from "express";
import createAnswerController from "../controllers/answer/createAnswer.controller";
import deleteAnswerCommentController from "../controllers/answer/deleteAnswerComment.controller";
import listAnswerController from "../controllers/answer/listAnswer.controller";
import verifyToken from "../middlewares/verifyToken.middleware";
import updateAnswerController from "../controllers/answer/updateAnswer.controller";

const answerRoutes = Router();

answerRoutes.post("/:commentId", verifyToken, createAnswerController);
answerRoutes.get("/:commentId", verifyToken, listAnswerController);
answerRoutes.delete("/:answerId", verifyToken, deleteAnswerCommentController);
answerRoutes.patch("/:answerId", verifyToken, updateAnswerController);

export default answerRoutes;
