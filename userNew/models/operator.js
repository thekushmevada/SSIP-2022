const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coordinatesSchema = new Schema({
    "sx":String,
    "sy":String,
    "dx":String,
    "dy":String
});




module.exports = mongoose.model('coordinates', coordinatesSchema);