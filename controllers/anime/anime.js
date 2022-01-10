const apiSchema = require("../../model/model.js")
const randomObject = require("../../utils/randomObject.js")

const getAnime = (req, res) => {
    apiSchema.find({ type: 'anime' }, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(randomObject(data));
    });
}

module.exports = getAnime