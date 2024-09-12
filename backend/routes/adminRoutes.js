const express = require("express");
const router = express.Router();
const {
  loginAdmin,
  currentAdmin,
  editAdmin,
  createAdmin
} = require("../controllers/adminController");
const {validateAdminToken} = require("../middleware/validateTokenHandler");

router.post("/login", loginAdmin);
router.post("/register", createAdmin);
router.get("/current", validateAdminToken, currentAdmin);
router.put("/update", validateAdminToken, editAdmin);

module.exports = router;