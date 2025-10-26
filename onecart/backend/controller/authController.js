import User from "../model/userModel.js";
import validator from "validator"
import bcrypt from "bcryptjs"
import { genToken, genToken1 } from "../config/token.js";

export const registration = async (req,res) => {
    try {
        console.log('Registration attempt received:', req.body);
        const {name , email , password} = req.body;
        
        // Convert email to lowercase for consistency
        const normalizedEmail = email.toLowerCase();
        
        console.log('Checking if user exists with email:', normalizedEmail);
        const existUser = await User.findOne({email: normalizedEmail})
        if(existUser){
            console.log('User already exists with email:', normalizedEmail);
            return res.status(400).json({message:"User already exists"})
        }
        if(!validator.isEmail(normalizedEmail)){
            console.log('Invalid email format:', normalizedEmail);
            return res.status(400).json({message:"Enter Valid Email"})
        }
        if(password.length < 8){
            console.log('Password too short');
            return res.status(400).json({message:"Enter strong Password"})
        }
        console.log('Hashing password...');
        let hashPassword = await bcrypt.hash(password,10)

        console.log('Creating new user...');
        const user = await User.create({
            name,
            email: normalizedEmail,
            password: hashPassword
        })
        let token = await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure: true,
            sameSite:"none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json({ user, token })
    } catch (error) {
        console.log("registration error")
        return res.status(500).json({message: `Registration error ${error}`})
        
    }
}

export const login = async (req,res) => {
    try {
        console.log('Login attempt received:', { 
            body: req.body,
            headers: req.headers
        });

        let {email,password} = req.body;
        // Convert email to lowercase for consistency
        const normalizedEmail = email.toLowerCase();
        console.log('Searching for user with normalized email:', normalizedEmail);
        
        let user = await User.findOne({email: normalizedEmail})
        if(!user){
            console.log('User not found with email:', email);
            return res.status(404).json({message:"User is not Found"})
        }
        console.log('User found:', { userId: user._id, email: user.email });

        console.log('Comparing passwords...');
        let isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            console.log('Password mismatch for user:', email);
            return res.status(400).json({message:"Incorrect password"})
        }
        console.log('Password matched successfully');

        console.log('Generating token...');
        let token = await genToken(user._id)
        console.log('Token generated successfully');

        console.log('Setting cookie...');
        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        console.log('Cookie set successfully');

        console.log('Sending successful response');
        return res.status(201).json({ user, token })
    } catch (error) {
        console.log("login error")
        return res.status(500).json({message: `login error ${error}`})
    }
}
export const logOut = async (req,res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"logOut successful"})
    } catch (error) {
        console.log("logOut error")
        return res.status(500).json({message: `logOut error ${error}`})
        
    }
}

export const googleLogin = async (req,res) => {
    try {
        let { name , email } = req.body;
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({ 
                name,email
            })
        }
        let token = await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json({ user, token })
    } catch (error) {
        console.log("googleLogin error")
        return res.status(500).json({message: `googleLogin error ${error}`})
        
    }
    
}



export const adminLogin = async (req,res) => {
    try {
        let {email , password } = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            let token = await genToken1(email)
            res.cookie("token",token,{
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge: 1 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json({ token })
        }
        return res.status(400).json({message:"Invalid credentials"})
        }

    catch (error) {
        console.log("adminLogin error")
        return res.status(500).json({message: `adminLogin error ${error}`}) 
        
    }
}
