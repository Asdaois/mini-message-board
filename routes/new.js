const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("form", { title: "Create a new Message" });
});

router.post("/", (req, res) => {
  const messageBoard = {};
  messageBoard.user = req.body.user;
  messageBoard.messageText = req.body.messageText;
  messageBoard.added = Date.now();

  try {
  } catch (error) {
    console.log(error);
  }

  res.redirect("/");
});

module.exports = router;
