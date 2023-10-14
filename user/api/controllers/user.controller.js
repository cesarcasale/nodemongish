const User = require("../models/user.model");
const { generateToken } = require("../../../util/jwt")
const { validateEmailDB, validatePassword } = require("../../../util/validator");
const bycript = require("bcrypt");


const register = async (req, res) => {
    try {

        const userBody = new User(req.body)
        const valEmail = await validateEmailDB(req.body.email)
        if (!valEmail) {
            if (validatePassword(req.body.password)) {
                userBody.password = bycript.hashSync(userBody.password, 10)
                const createduser = await userBody.save();
                return res.json({ success: true, message: "Agregado con exito", data: createduser })
            } else {
                return res.json({ success: false, message: "La contraseña no cumple con el patron" })
            }
        }
        return res.json({ success: false, message: "Email already registered" })
    } catch (error) {
    }
}

const login = async (req, res) => {
    try {
        const userInfo = req.body;
        const userDB = await validateEmailDB(userInfo.email);
        if (!userDB) {
            return res.json({ success: false, message: "Email no existe" })
        }
        if (!bycript.compareSync(userInfo.password, userDB.password)) {
            return res.json({ success: false, message: "La contraseña no coincide" })
        }
        //generar el token
        const token = generateToken(userDB._id, userDB.email);
        return res.json({ success: true, message: "login realizado", token: token, userInfo: userDB })

    } catch (error) {

    }

}
const profile = async (req, res) => {
    try {
        return res.status(200).json(req.userProfile)
    } catch (error) {

    }
}

module.exports = { register, login, profile }
