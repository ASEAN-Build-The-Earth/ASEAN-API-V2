const apiSchema = require("../../../model/model.js")
const randomObject = require("../../../utils/randomObject.js")

const getCatto = (req, res) => {
    apiSchema.find({ type: 'shitpost' }, { _id: 0, __v: 0 }, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(randomObject(data));
    });
}

module.exports = getCatto