const jwt = require('jsonwebtoken');


const tokenKey = process.env.TOKEN_KEY;
 
const verifyToken = (req, res, next) => {
    // let token = req.body.token || req.query.token || req.headers['authorization'];
    let token = req.headers['authorization'];

    if (!token)
        return res.status(403).send('Token is required');

    try {
        token = token.replace(/^Bearer\s+/, '');
        req.user = jwt.verify(token, tokenKey);
    } catch (e) {
        return res.status(401).send('Invalid Token');
    }
    return next();
}

module.exports = verifyToken;