import express from "express"
import { addPassword, deletePassword, getPassword } from "../controllers/passControllers"

const router=express.Router()

router.post("/add-password",addPassword)
router.get("/get-password/:email",getPassword)
router.delete("/delete-password/:id",deletePassword)

export default router