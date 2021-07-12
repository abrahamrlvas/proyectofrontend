const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    jwt.verify(req.token, process.env.AUTH_SECRET, (error, decoded) => {
      if (error) {
        res
          .status(403)
          .send("Token invalido!");
      } else {
        req.user = decoded.userId;
        next();
      }
    });
  } else {
    res
      .status(403)
      .send("No tienes autorización!");
  }
};

module.exports = verifyToken;
