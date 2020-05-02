const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    lat: { type: String, required: false },
    long: { type: String, required: false },
});

const user = mongoose.model("User", userSchema);

module.exports = user;