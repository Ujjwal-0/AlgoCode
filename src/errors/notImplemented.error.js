const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class NotImplemented extends BaseError{
    constructor(methodName){
        super("NotImplemented", StatusCodes.BAD_REQUEST, `${methodName} not implemented`,{});
    }
}

module.exports = NotImplemented;

