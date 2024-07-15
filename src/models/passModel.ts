import mongoose, { Schema } from "mongoose";
import { IPassword } from "../interfaces/passInterface";

const PassSchema:Schema = new Schema<IPassword>({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const password = mongoose.model<IPassword>("Password",PassSchema)

export default password