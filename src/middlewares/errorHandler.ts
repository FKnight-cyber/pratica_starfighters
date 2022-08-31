import { Request, Response, NextFunction } from "express";

export async function errorHandler(error:any, req:Request, res:Response, next: NextFunction) {
    console.log(error.type)
    if(error.type === 422) return res.status(422).send("Fighter name must be informed!");
    if(error.type === 404) return res.status(404).send("Fighter don't have github projects!")
    next();
}