const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    latitude: { type: String, required: false },
    longitude: { type: String, required: false },
    magnitude: { type: String, required: false },
    proximity: { type: String, required: false }
});

const user = mongoose.model("User", userSchema);

module.exports = user;