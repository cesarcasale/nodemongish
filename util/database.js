const mongoose = require("mongoose")

//URL DB
const url = "mongodb+srv://cesarcasale:A03f25cg@cluster0.wshtjkz.mongodb.net/proyectoNodeLibrary?retryWrites=true&w=majority";

const connectDb = async ()=>{
    try {
        const db = await mongoose.connect(url, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        const {name, host} = db.connection;
        console.log(`Nombre de la BBDD: ${name} host: ${host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connectDb }