const express = require("express");
const router = express.Router();
const {
  loginAdmin,
  currentAdmin,
  editAdmin
} = require("../controllers/adminController");
const {validateToken, validateAdminToken} = require("../middleware/validateTokenHandler");

router.post("/login", loginAdmin);
router.get("/current", validateAdminToken, currentAdmin);
router.get("/update", validateAdminToken, editAdmin);

module.exports = router;