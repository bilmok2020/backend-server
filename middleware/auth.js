const jwt = require("jsonwebtoken");
const User = require("../model/User");

let tokenSecret = process.env.JWT_SECRET || "receptayyiperodan";

module.exports = async (req, res, next) => {
  console.log("in the authhhhh");
  //Get jsonwebtoken from header of http request
  let token = req.headers["x-access-token"] || req.headers.authentication;
  //if token exist
  if (token) {
    //Verifies token is valid or not
    jwt.verify(token, tokenSecret, async (err, decoded) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Token is not valid"
        });
      } else {
        //if there is no error set req.user as decoded toke data
        console.log(decoded);
        console.log(User);
        try {
          req.user = await User.findByUsername(decoded.username);
          console.log(req.user.fullName());
        } catch (e) {
          res.status(404).json({
            message: "User not found!",
            success: false
          });
        }
        next();
        //Go next middleware or router
      }
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "Auth token is not supplied"
    });
  }
};
