const ApiError = require('../error/ApiError');

module.exports = function (req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({message})
    }

    return res.status(500).json({message: "Myw myw myw myw myw myw myw myw myw myw"})
};