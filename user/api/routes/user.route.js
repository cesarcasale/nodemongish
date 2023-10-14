const express = require("express")

const { register, login, profile} = require("../controllers/user.controller");
const { isAuth } = require("../../../middleware/auth");

const route = express.Router()


route.post("/register", register);
route.post("/login", login);
route.get("/profile", [isAuth], profile);

module.exports = route;