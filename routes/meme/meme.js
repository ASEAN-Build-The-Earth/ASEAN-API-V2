const express = require("express")
const getMeme = require("../../controllers/meme/meme.js")

let router = express.Router()

router
    .route("/")
    .get(getMeme)

module.exports = router;