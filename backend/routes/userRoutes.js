const express = require("express");
const router = express.Router();
const {
  loginUser,
  registerUser,
  currentUser,
  getUserDetails,
  getAllUsers,
  editUser,
  countUsers,
  deleteUser
} = require("../controllers/userController");
const {validateToken, validateAdminToken} = require("../middleware/validateTokenHandler");

router.get("/list", getAllUsers);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.put("/:userId/edit", editUser);
router.delete("/:userId/delete", deleteUser);
router.get("/current", validateToken, currentUser); 
router.get("/count",countUsers);

module.exports = router;
