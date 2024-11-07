const {CustomAPIError} = require('../errors/custom-error')
const errorHAndlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({message : err.message});
    }
    return res.status(500).json({ msg : 'Something went wrong! Try again later' });
};

module.exports = errorHAndlerMiddleware;