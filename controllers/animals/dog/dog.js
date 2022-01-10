const apiSchema = require("../../../model/model.js")
const randomObject = require("../../../utils/randomObject.js")

const getDoggo = (req, res) => {
    apiSchema.find({ type: 'dog' }, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(randomObject(data));
    });
}

module.exports = getDoggo