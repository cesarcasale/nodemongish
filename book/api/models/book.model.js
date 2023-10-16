const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required:true},
    author: {type: String, required:true},
    genre: {type: String, required:true},
    year: {type: Number},
    image: { type: String, default: "" },
    user: {type: Schema.ObjectId, ref: "user"},
    library: {type: Schema.ObjectId, ref: "library"},
},{
    
    timestamps:true, //genere una fecha de creacion y de mod auto.
    collection: "book"
});


const Book = mongoose.model("book", bookSchema)
module.exports = Book;