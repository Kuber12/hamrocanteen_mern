const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader || authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    if(token == "null"){
      return res.status(200).send({msg: "Not Logged in"})
    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        console.log(process.env.ACCESS_TOKEN);
        res.status(401);
        throw new Error("User is not authorized");
      }
      req.user = decoded.user;
      next();
    });
    if (!token) {
      res.status(401);
    }
  }
});

module.exports = validateToken;
