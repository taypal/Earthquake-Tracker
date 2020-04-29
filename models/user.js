const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    lat: { type: String, required: true },
    long: { type: String, required: true },
});

const user = mongoose.model("User", userSchema);

module.exports = user;