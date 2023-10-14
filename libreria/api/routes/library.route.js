const express = require("express");
const {getLibrary, addLibrary, putLibrary, deleteLibrary} = require("../controllers/library.controller")
const routeLibrary = express.Router();



    routeLibrary.get("/getLibrary", getLibrary)

    routeLibrary.post("/registerLibrary", addLibrary)

    routeLibrary.put("/:id", putLibrary)

    routeLibrary.delete("/:id", deleteLibrary)


module.exports = routeLibrary;