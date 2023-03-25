import { Router, Request, Response } from "express";

const router = Router()

router.post('/users',(res: Response, req: Request)=>{
  return res.status(201).send('teste')
})

export {router}