import express from "express"
import { adminLogin, googleLogin, login , logOut , registration } from '../controller/authController.js'
import { getCurrentUser } from "../controller/userController.js"
import authenticate from "../middleware/isAuth.js"


const authRoutes = express.Router()

authRoutes.post("/registration",registration)
authRoutes.post("/login",login)
authRoutes.get("/logout",logOut)
authRoutes.post("/googleLogin",googleLogin)
authRoutes.get("/getCurrentUser",authenticate, getCurrentUser)
authRoutes.post("/adminLogin",adminLogin)



export default authRoutes