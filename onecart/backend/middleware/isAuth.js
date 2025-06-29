
import jwt from 'jsonwebtoken'

const isAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(400).json({ message: "User does not have a token" });
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = verifyToken.userId;
        next();
    } catch (error) {
        console.log("isAuth error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token", error: error.message });
    }
}

export default isAuth;

