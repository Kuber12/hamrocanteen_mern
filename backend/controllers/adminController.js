const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send({ message: "Please fill all fields!" });
  } else {
    const admin = await Admin.findOne({ username: username });
    if (!admin) {
      return res.status(404).send({ message: "Admin not found" });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).send({ message: "Invalid Credentials!" });
    }
    const accessToken = jwt.sign(
      {
        admin: {
          id: admin._id,
          username: admin.username,
        },
      },
      process.env.ADMIN_ACCESS_TOKEN,
      { expiresIn: "30d" }
    );
    return res.status(200).send({ message: accessToken });
  }
});

const createAdmin = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).send({ message: "Please fill all fields!" });
  } else {
    const adminExist = await Admin.findOne({ username: username });
    if (adminExist) return res.status(400).send("Admin already exists!");
    // Hash the password before saving into database
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = await Admin.create({
        username: username,
        password: hashedPassword,
        email: email
    });
  }
  res.json({ message: "Admin created successfully" });
});

const currentAdmin = asyncHandler(async (req, res) => {
  try {
    res.json(req.admin);
  } catch (error) {
    res.status(400).json({ message: "Admin not logged in" });
  }
});

const editAdmin = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).send({ message: "Please fill all fields!" });
  } else {
    const admin = await Admin.findByIdAndUpdate(
      req.admin.id,
      { username, password, email },
      { new: true }
    );
    if (!admin) {
      return res.status(404).send({ message: "Admin not found" });
    }
    const accessToken = jwt.sign(
      {
        admin: {
          id: admin._id,
          username: admin.username,
        },
      },
      process.env.ADMIN_ACCESS_TOKEN,
      { expiresIn: "30d" }
    );
    return res.status(200).send({ message: accessToken });
  }
});

module.exports = { loginAdmin, createAdmin, currentAdmin, editAdmin };
