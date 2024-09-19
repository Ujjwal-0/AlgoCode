const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class NotFound extends BaseError{
    constructor(resourceName, resourceValue){
        super("Notfound", StatusCodes.NOT_FOUND, `The requested resource ${resourceName} with value ${resourceValue} not found`,{
            resourceName,
            resourceValue
        });
    }
}

module.exports = NotFound;

