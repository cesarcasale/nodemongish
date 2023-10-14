const Library = require("../models/library.model");

//get
const getLibrary = async(req, res) => {
    try {
        const allLibrary = await Library.find();
        return res.status(200).json(allLibrary)
    } catch (error) {
        return res.status(500).json(error)
    }
};
//post
const addLibrary = async (req, res) =>{
    try {
    const newLibrary = new Library(req.body);
    const createdLibrary = await newLibrary.save()
    return res.status(200).json({ message: "Library created"})
    } catch (error) {
        
    }
}
//put
const putLibrary =async (req, res) => {
    try {
        const { id } = req.params;
        const putLibrary = new Library(req.body);
        putLibrary._id = id;
        const updateLibrary = await Library.findByIdAndUpdate(id, putLibrary, {
            new:true,
        });
        return res.status(200).json(updateLibrary)
    } catch (error) {
        return res.status(500).json(error)
    }
};
//delete
const deleteLibrary = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteLibrary = await Library.findByIdAndDelete(id);
        return res.status(200).json(deleteLibrary)
    } catch (error) {
        return res.status(500).json(error)
    }
}
module.exports = {getLibrary, addLibrary, putLibrary, deleteLibrary}