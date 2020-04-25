const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const earthquakeSchema = new Schema({
    location: { type: String, required: true },
    depth: { type: String, required: true },
    magnitude: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const earthquake = mongoose.model("Earthquake", earthquakeSchema);

module.exports = earthquake;