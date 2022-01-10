const express = require("express")
const getBuild = require("../../controllers/builds/builds.js")

let router = express.Router()

router
    .route("/")
    .get(getBuild)

module.exports = router;