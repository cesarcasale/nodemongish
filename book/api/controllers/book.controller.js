const Book = require("../models/book.model");

//get Book
const getBook = async(req, res) => {
    try {
        const allBook = await Book.find();
        return res.status(200).json(allBook)
    } catch (error) {
        return res.status(500).json(error)
    }
};
//get Book by id
const getBookById = async (req, res) => {
    try {
        const {id} = req.params;
        const bookById = await Book.findById(id);
        if (!bookById) {
            return res.status(404).json({message: "there is no book with this id"});
        }
        return res.status(200).json(bookById)
    } catch (error) {
        return res.status(500).json(error);
    }
};
//by title
const getBookByTitle = async (req, res) => {
    try {
        const {title} = req.params;
        const bookByTitle = await Book.find({title: title});
        if (!bookByTitle) {
        return res.status(404).json({message: "there is no book with this name"});
        }
        return res.status(200).json(bookByTitle)
    } catch (error) {
        return res.status(500).json(error);
    }
};
//by type
const getBookByGenre = async (req, res)=>{
    try {
        const {type} = req.params;
        const bookByGenre = await Book.find({type});
        if (!bookByGenre) {
            return res.status(404).json({message: "there is no book of this genre"});
        }
        return res.status(200).json(bookByGenre)
    } catch (error) {
        return res.status(500).json(error);
    }
};
//byDate
const getBookByYear = async (req, res) => {
    try {
        const { year } = req.params;
        const bookByYear = await Book.find({ year: { $gte: year } });
        
        if (bookByYear.length === 0) {
            return res.status(404).json({ message: "No hay libros de este año o posteriores" });
        } else {
            return res.status(200).json(bookByYear);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};
//post
const postBook = async(req, res) =>{
        try {
            const newBook = new Book(req.body);
            const createBook = await newBook.save();
            return res.status(201).json(createBook)
        } catch (error) {
        return res.status(201).json(error)
        }
    };
//put
const putBook = async (req, res) => {
    try {
        const { id } = req.params;
        const putBook = new Book(req.body);
        putBook._id = id;
        const bookpath =  req.file.path;
        if(req.file){
            //putBook.image
        }
        if (bookpath) {
            const createdBook = await Book.findByIdAndUpdate(id,{img:bookpath});
            //console.log(bookpath)
            return res.json(createdBook)
        }
        const updateBook = await Book.findByIdAndUpdate(id, putBook, {
            new: true,
        });
        return res.status(200).json(updateBook);
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
};
//delete
const deleteBook = async (req, res) => {
    try {
        console.log("aqui estoy")
        const { id } = req.params;
        const deleteBook = await Book.findByIdAndDelete(id);
        return res.status(200).json(deleteBook)
    } catch (error) {
        return res.status(500).json(error)
    }
}
module.exports = {getBook, getBookById, getBookByTitle, getBookByGenre, getBookByYear, postBook, putBook, deleteBook};
