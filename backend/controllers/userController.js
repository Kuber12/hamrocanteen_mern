const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Please provide all fields" });
  } else {
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            name: user.name,
            email: user.email,
            id: user.id
          },
        },
        process.env.ACCESS_TOKEN,
        { expiresIn: "30d" }
      );
      // sessionStorage.setItem('token', token);
      return res.status(200).json({ message: accessToken });
    } else {
      return res.status(401).json({ message: "Invalid Credentials!" });
    }
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { username, name, password} =
    req.body;
  if (!username || !name || !password ) {
    return res.status(400).send({ message: "Please fill all fields!" });
  } else {
    const userExist = await User.findOne({ username: username });
    if (userExist) return res.status(400).send("Username already exists!");
    // Hash the password before saving into database
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        username: username,
        name: name,
        password: hashedPassword
    });
  }
  res.json({ message: "Registered a user" + name });
});
const editUser = asyncHandler(async (req, res) => {
    const username = req.params.username;
    const { name, email, dob, gender, address, bio,userImage } = req.body;

    try {
        const user = await User.findOne({ username: username }).select("-password");

        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }

        // Update user information
        user.name = name || user.name;
        user.email = email || user.email;
        user.dob = dob || user.dob;
        user.bio = bio || user.bio;
        user.gender = gender || user.gender;
        user.address = address || user.address;
        user.userImage = userImage || user.userImage;

        await user.save();

        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

const currentUser = asyncHandler(async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ message: "User not logged in" });
  }
});

const getUserDetails = asyncHandler(async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOne({ username: username }).select("-password");
    res.status(200).json({ message: user });
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ message: "User not found" });
  }
});
const getAllUsers = asyncHandler(async (req,res) => {
  try{
    const users = await User.findAll().select("-password");
    res.status(200).json({ message: users });
    res.json(req.users);
  } catch (error) {
    res.status(400).json({ message: "User not found" });
  }
})


module.exports = { loginUser, registerUser,editUser, currentUser, getUserDetails, getAllUsers };
