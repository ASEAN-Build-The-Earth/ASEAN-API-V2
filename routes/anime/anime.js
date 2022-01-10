const express = require("express")
const getAnime = require("../../controllers/anime/anime.js")

let router = express.Router()

router
    .route("/anime")
    .get(getAnime)

module.exports = router;