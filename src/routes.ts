import { Router, Request, Response } from "express";
import { createUserController } from "./useCases/createUser";

const router = Router()

router.post('/users',(res: Response, req: Request)=>{
  return createUserController.handle(req, res)
});

export {router}