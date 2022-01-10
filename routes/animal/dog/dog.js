const express = require("express")
const getDoggo = require("../../../controllers/animals/dog/dog.js")

let router = express.Router()

router
    .route("/image")
    .get(getDoggo)

module.exports = router;