const express = require("express");
const {
  addMessageController,
  getMessagesController,
} = require("../controller/messageController");

const routes = express.Router();

routes.post("/addmsg", addMessageController);
routes.post("/getmsg", getMessagesController);

module.exports = routes;
