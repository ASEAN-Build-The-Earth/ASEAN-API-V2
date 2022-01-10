const apiSchema = require("../../model/model.js")
const randomObject = require("../../utils/randomObject.js")

const getMeme = (req, res) => {
    apiSchema.find({ type: 'test' }, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(randomObject(data));
    });
}

module.exports = getMeme