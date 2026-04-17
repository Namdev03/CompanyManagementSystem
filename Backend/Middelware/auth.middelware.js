const jwt = require('jsonwebtoken')

async function loginMiddleware(req, res, next) {
     const token = req.cookies?.securetoken;   
    try { 
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

module.exports = loginMiddleware;