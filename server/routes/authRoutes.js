const expree = require("express");
const {
  singupController,
  loginController,
} = require("../controller/authController");

const routes = expree.Router();
routes.post("/signup", singupController);
routes.post("/login", loginController);
module.exports = routes;
