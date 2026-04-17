const mongoose = require("mongoose");

async function connectDB() {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Databae connected successfully on ${process.env.MONGO_URI}`);
        
    } catch (error) {
        throw new Error(error);
        
    }
}
module.exports = connectDB;