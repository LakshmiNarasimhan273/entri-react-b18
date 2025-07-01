const jwt = require("jsonwebtoken");

const authMiddleware = (allowedRoles = []) => {
    // Function currying
    return (req, res, next) => {
        const authHeaders = req.headers.authorization;
        if(!authHeaders || !authHeaders.startsWith("Bearer ")){
            return res.status(401).json({message: "Unauthorized access, no token provided"});
        }
        const token = authHeaders.split(" ")[1];
        try{
            const decoded = jwt.verify(token, "LakshmiNarasimhan");
            req.user = decoded;
            const userRole = decoded.role;
            if(userRole === "admin"){
                return next();
            }
            if(userRole === "user"){
                if(req.method === "GET"){
                    return next();
                }else{
                    return res.status(403).json({message: "Access denied"});
                }
            }
        }catch(err){
            return res.status(401).json({message: "Unauthorized: Invalid or expired token"});
        }
    }
}

module.exports = authMiddleware;