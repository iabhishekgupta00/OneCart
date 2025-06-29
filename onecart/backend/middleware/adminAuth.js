import jwt from 'jsonwebtoken'

const adminAuth = (req, res, next) => {
    try {
        let {token} = req.cookies

    if (!token) {
        return res.status(400).json({message: "Unauthorized access, please login as admin."})
        
    }
    let verifiedToken = jwt.verify(token, process.env.JWT_SECRET)

    if (!verifiedToken) {
        return res.status(400).json({message: "Unauthorized access, please login as admin, Invalid Token"})
    }
    req.adminEmail = process.env.ADMIN_EMAIL

    next()
    } catch (error) {
        console.log("adminAuth error:")
        return res.status(500).json({ message: "Invalid or expired token", error: error.message })
        
    }
}

export default adminAuth