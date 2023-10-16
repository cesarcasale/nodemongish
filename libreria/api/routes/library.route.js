const express = require("express");
const { isAdminAuth } = require("../../../middleware/adminAuth");
const {getLibrary, addLibrary, putLibrary, deleteLibrary} = require("../controllers/library.controller")
const routeLibrary = express.Router();



    routeLibrary.get("/getLibrary", getLibrary)

    routeLibrary.post("/registerLibrary", [isAdminAuth], addLibrary)

    routeLibrary.put("/:id", [isAdminAuth], putLibrary)

    routeLibrary.delete("/:id", [isAdminAuth], deleteLibrary)


module.exports = routeLibrary;