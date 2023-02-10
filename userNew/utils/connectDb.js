const mongoose = require('mongoose');


async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://kushmevada:tcev_project@cluster0.igotdmm.mongodb.net/TCEV?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error in Connecting", err);
    }
}

module.exports = connectDB;