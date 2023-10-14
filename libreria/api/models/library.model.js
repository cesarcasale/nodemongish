
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const librarySchema = new Schema({
    author: {type: String, required:true},
    genre: {type: String, required:true},
    year: {type: Date},
    book: [{type: Schema.ObjectId, ref: "book"}],
    user: [{type: Schema.ObjectId, ref: "user"}],
},{
    timestamps:true, //genere una fecha de creacion y de mod auto.
    collection: "library"
});


const Library = mongoose.model("library", librarySchema)
module.exports = Library;