const jwt = require('jsonwebtoken');


const tokenKey = process.env.TOKEN_KEY;

const verifySocketToken = (socket, next) => {

    const token = socket.handshake.auth?.token;

    if (!token) {

        return next(new Error('Token is required'));
    }

    try {
        socket.user=jwt.verify(token, tokenKey);
    } catch (e) {
        return next(new Error('Invalid Token'));
    }
    next();
}

module.exports = verifySocketToken;