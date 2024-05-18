const mongoose = require("mongoose")

module.exports = async function connection() {
    try {
        await mongoose.connect(process.env.DB)
        console.log("Connected to mongoDB")
    }
    catch(error)
    {
        console.log("Error",error)
    }
}