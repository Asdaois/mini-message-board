const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  const messages = []
  res.render("index", { title: "Mini Message Board", messages  });
});

module.exports = router;
