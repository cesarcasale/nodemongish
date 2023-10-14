const express = require("express");
const { isAdminAuth } = require("../../../middleware/adminAuth");
const {getBook, postBook, getBookById, getBookByTitle, getBookByGenre, getBookByYear, putBook, deleteBook} = require("../controllers/book.controller")

const route = express.Router()
const upload = require("../../../middleware/upload.file");

route.get("/", getBook)

route.get("/byId/:id", getBookById)

route.get("/byName/:name", getBookByTitle)

route.get("/byType/:type", getBookByGenre)

route.get("/byYear", getBookByYear)

route.post("/uploadBook", [isAdminAuth], upload.single("image"), postBook)

route.put("/updateBook/:id", [isAdminAuth], putBook)

route.delete("/deleteBook/:id", [isAdminAuth], deleteBook)

module.exports = route