const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coordinatesSchema = new Schema({
    "data":[Number],
});




module.exports = mongoose.model('coordinates', coordinatesSchema);