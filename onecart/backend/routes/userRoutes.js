import express from "express"
import isAuth from "../middleware/isAuth.js"
import { getCurrentUser } from "../controller/userController.js"
import { getAdmin } from "../controller/userController.js"
import adminAuth from "../middleware/adminAuth.js"

let userRoutes = express.Router()

userRoutes.get("/getCurrentUser", isAuth , getCurrentUser )
userRoutes.get("/getAdmin", adminAuth  , getAdmin )

export default userRoutes