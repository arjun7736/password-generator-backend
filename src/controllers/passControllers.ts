import { Request, Response } from "express"
import errorResponse from "../utils/error"
import { isValidPassword } from "../utils/testPass"

export const addPassword=(req:Request,res:Response)=>{
    try {
        const {name,password}=req.body
        if(!name || !password){
            throw errorResponse(400,"Please provide name and password",res)
        }
        if(!isValidPassword(password)){
            throw errorResponse(400,"Passsword must contain number,uppercase,lowecase,symbol and number",res)
        }

        res.json("success")
    } catch (error) {
        console.log("error")
    }
}