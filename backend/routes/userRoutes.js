const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  currentUser,
  getUserDetails,
  editUser,
} = require("../controllers/userController");
const {validateToken, validateAdminToken} = require("../middleware/validateTokenHandler");

router.post("/login", loginUser);
router.post("/register", registerUser);
router.put("/:username/edit", validateAdminToken, editUser);
router.get("/:username/user", getUserDetails);
router.get("/current", validateToken, currentUser); 

module.exports = router;
