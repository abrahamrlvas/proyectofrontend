const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  let bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    jwt.verify(req.token, process.env.AUTH_SECRET, (error, decoded) => {
      if (error) {
        res.status(403).send('Invalid token')
      }else{
        req.user = decoded.id;
      }
    })
    next();
  } else {
    res.status(403).send('No token provided!')
  }
}

module.exports = verifyToken;