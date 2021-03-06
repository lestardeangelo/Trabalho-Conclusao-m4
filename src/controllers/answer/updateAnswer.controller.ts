import { NextFunction, Request, Response } from "express"
import updateAnswerService from "../../services/answer/updateAnswer.service"
import { instanceToPlain } from "class-transformer"

const updateAnswerController = async (req: Request, res: Response, next: NextFunction ) =>{
    try {

      const id = req.params.answerId;
      const { description } = req.body;
      const userId = req.user

      const updateAnswer = await updateAnswerService(id, userId, description)
  
      return res.status(201).json(instanceToPlain(updateAnswer))
  
    } catch (error) {
      next(error)
    }
  }
  
  export default updateAnswerController