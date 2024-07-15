import { Request, Response } from "express"
import errorResponse from "../utils/error"
import { isValidPassword } from "../utils/testPass"
import PasswordDB from "../models/passModel"

export const addPassword=async(req:Request,res:Response)=>{
    try {
        const {name,password,user}=req.body
        if(!user){
            throw errorResponse(400,"Please login again",res)
        }
        if(!name || !password){
            throw errorResponse(400,"Please provide name and password",res)
        }
        if(!isValidPassword(password)){
            throw errorResponse(400,"Passsword must contain number,uppercase,lowecase,symbol and number",res)
        }
        const existingPassword=await PasswordDB.findOne({name})
        if(existingPassword){
            throw errorResponse(402,"This One already exist",res)
        }
        await PasswordDB.create({name,password,user})
        res.json({message:"Password Saved SuccessFully"})
    } catch (error) {
        console.log("error")
    }
}

export const getPassword=async(req:Request,res:Response)=>{
    try {
        const email =req.params.email
        if(!email){
            throw errorResponse(400,"Login First",res)
        }
         const passwords = await PasswordDB.find({user:email})
        res.json(passwords)
    } catch (error) {
        console.log("error")
    }
}

export const deletePassword=async(req:Request,res:Response)=>{
    try {
        const id=req.params.id
        await PasswordDB.findByIdAndDelete(id)
        res.json({message:"Password Deleted SuccessFully"})
    } catch (error) {
        console.log("error")
    }
}