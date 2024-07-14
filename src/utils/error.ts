import { Response } from "express"

const errorResponse =(statuscode:number,message:string,res:Response) => {
    return res.status(statuscode).json({
        error:message
    })

}
export default errorResponse