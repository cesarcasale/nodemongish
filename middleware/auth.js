const { verifyToken } = require("../util/jwt");
const User = require("../user/api/models/user.model");

const isAuth = async (req, res, next) => {
    try {
        const auth = req.headers.authorization;
        if (!auth) {
            return res.status(400).json({ message: "No autorizado" })
        }
        const token = auth.split(" ")[1];
        const tokenVerified = verifyToken(token);
        if (!tokenVerified.id) {
            return res.status(400).json({ message: "No autorizado", message: tokenVerified })
        }
                const adminProfile = await User.findById(tokenVerified.id)
                req.adminProfile = adminProfile;
                console.log()
                next();
                const userProfile = await User.findById(tokenVerified.id)
                req.userProfile = userProfile;
                next();
    } catch (error) {
    }
}
module.exports = { isAuth }
