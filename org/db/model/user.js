const mongoose = require("mongoose");

const Schema  = mongoose.Schema;

const userSchema = new Schema({
    name : { type: String, required: true},
    email: { type: String, required: true},
    phone: String,
    age: Number,
    gender: String,
    password: { type: String, required: true},
    company_id : { type: Schema.Types.ObjectId, required: true, ref: 'company' }
});

module.exports = {
    name: 'user',
    val: mongoose.model("user", userSchema)
}