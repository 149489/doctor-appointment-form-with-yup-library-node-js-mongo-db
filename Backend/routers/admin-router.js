const express = require("express");
const router = express.Router();

router.get("/login", (req, res, next) => {
  return res.send("login ok");
});

module.exports = router;
