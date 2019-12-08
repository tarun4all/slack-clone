const mongoose = require("mongoose");

const Schema  = mongoose.Schema;

const comapnySchema = new Schema({
    name : { type: String, required: true},
    subdomain : String,
    email: { type: String, required: true},
    industry: { type: String, required: true},
    otp: String,
    verified: { type: Boolean, default: false},
});

module.exports = {
    name: 'company',
    val: mongoose.model("company", comapnySchema)
}