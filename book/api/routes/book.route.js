const express = require("express");
const { isAdminAuth } = require("../../../middleware/adminAuth");
const {getBook, postBook, getBookById, getBookByTitle, getBookByGenre, getBookByYear, putBook, deleteBook} = require("../controllers/book.controller")

const route = express.Router()
const upload = require("../../../middleware/upload.file");

route.get("/allbooks", getBook)

route.get("/byId/:id", getBookById)

route.get("/byName/:name", getBookByTitle)

route.get("/byType/:type", getBookByGenre)

route.get("/byYear/:year", getBookByYear)

route.post("/uploadBook", [isAdminAuth], postBook)

route.put("/updateBook/:id", [isAdminAuth], upload.single("image"), putBook)

route.delete("/deleteBook/:id", [isAdminAuth], deleteBook)

module.exports = route