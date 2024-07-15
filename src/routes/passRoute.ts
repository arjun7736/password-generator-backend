import express from "express"
import { addPassword, getPassword } from "../controllers/passControllers"

const router=express.Router()

router.post("/add-password",addPassword)
router.get("/get-password",getPassword)

export default router