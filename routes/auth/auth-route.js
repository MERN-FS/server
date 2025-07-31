const express = require("express");
const { registerUser } = require("../../controllers/auth/auth-cotroller");
const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
