class api_error extends Error{
    constructor(status, message){
        super();
        this.status = status
        this.message = message
    }

    static bad_request(message){
        return new api_error(404, message)
    }

    static internal(message){
        return new api_error(500, message)
    }

    static forbidden(message){
        return new api_error(403, message)
    }

}


module.exports = api_error  