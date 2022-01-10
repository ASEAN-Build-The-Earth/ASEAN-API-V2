const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("apiSchema", apiSchema, "random_api");