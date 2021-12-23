const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader;
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) res.status(403).json("Le token est invalide.")
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json("Vous n'êtes pas authentifié.")
    }
};

const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return res.status(403).json("Permission insuffisante.")
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next();
        } else {
            return res.status(403).json("Permission insuffisante.")
        }
    })
}

module.exports = { 
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin 
};