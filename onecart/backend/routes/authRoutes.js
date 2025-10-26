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

// Temporary route to check registered users - REMOVE IN PRODUCTION
authRoutes.get("/check-users", async (req, res) => {
    try {
        const users = await User.find({}, 'email name');
        console.log('Registered users:', users);
        res.json(users);
    } catch (error) {
        console.error('Error checking users:', error);
        res.status(500).json({ message: 'Error checking users' });
    }
});


export default authRoutes