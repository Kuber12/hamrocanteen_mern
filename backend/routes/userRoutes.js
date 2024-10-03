const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  currentUser,
  getUserDetails,
  getAllUsers,
  editUser
} = require("../controllers/userController");
const {validateToken, validateAdminToken} = require("../middleware/validateTokenHandler");

router.get("/list", getAllUsers);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.put("/:username/edit", validateAdminToken, editUser);
router.get("/current", validateToken, currentUser); 

module.exports = router;
