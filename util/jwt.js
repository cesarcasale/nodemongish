const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    return jwt.verify(token, "gdgshsjs7859632");
}

const generateToken = (id, email) => {
    return jwt.sign({ id, email }, "gdgshsjs7859632", { expiresIn: '1h' })
}



module.exports = { generateToken, verifyToken }