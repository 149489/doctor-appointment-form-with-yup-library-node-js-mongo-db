const express = require("express");
const router = express.Router();

const { resisterHandle } = require("../controllers/user-controller");

router.post("/resister", resisterHandle);

module.exports = router;
