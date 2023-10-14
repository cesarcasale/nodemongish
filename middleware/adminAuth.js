const { verifyToken } = require("../util/jwt");
const User = require("../user/api/models/user.model");



const isAdminAuth = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        if (!auth) {
            return res.status(400).json({ message: "no autorizado" })
        }
        const token = auth.split(" ")[1];
        const tokenVerified = verifyToken(token);
        if (!tokenVerified.id) {
            return res.status(400).json({ message: "No autorizado", message: tokenVerified })
        }
            const userProfile = await User.findById(tokenVerified.id)
        if (userProfile.role === "admin"){
            req.userProfile = userProfile;
            next();
        }else{
            return res.status(400).json({ message: "no autorizado" })
        }
    } catch (error) {

    }
}

module.exports = { isAdminAuth }