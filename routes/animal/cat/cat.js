const express = require("express")
const getCatto = require("../../../controllers/animals/cat/cat.js")

let router = express.Router()

router
    .route("/image")
    .get(getCatto)

module.exports = router;