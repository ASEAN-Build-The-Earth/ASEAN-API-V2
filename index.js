// Dependencies
const express = require('express')
const mongoose = require('mongoose')
const path = require("path");
const cors = require('cors')
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Routes
const anime = require("./routes/anime/anime.js")
const catto = require("./routes/animal/cat/cat.js")
const doggo = require("./controllers/animals/dog/dog.js")
const builds = require("./routes/builds/builds.js")
const meme = require("./routes/meme/meme.js")

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });


app.use(cors());
app.use(express.static("views"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'))
})
app.use("/api/v2/anime", anime);
app.use("/api/v2/cat", catto)
app.use("/api/v2/dog", doggo)
app.use("/api/v2/builds", builds)
app.use("/api/v2/meme", meme)

const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`Server up on port ${port}`);
});