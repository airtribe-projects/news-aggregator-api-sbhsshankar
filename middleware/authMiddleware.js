const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-secret-key';

function authenticationToken(req, res, next){
    const authHeader = req.headers.authorization;

    //format bearer <token>
    const token = authHeader && authHeader.split("")[1];
    if (!token) return
    res.status(401).json({message: 'Token required'});
    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; //add user info to request
        next();
    } catch (err){
        return res.status(403).json({message: 'Invalid token'});
    }
}


module.exports = authenticationToken;