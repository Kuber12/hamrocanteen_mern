import React from "react";
import axios from "axios";
import { UNSAFE_DataRouterStateContext } from "react-router-dom";

const UserApi = () => {
  const URL = "http://localhost:3000";

  async function loginUser(user) {
    console.log(user);
    try {
      const EndPoint = URL + "/api/user/login";
      console.log("Endpoint: ", EndPoint);

      // Send login request
      const response = await axios.post(EndPoint, user);
      const token = await response.data.message; // Assuming `message` holds the token

      // Store token in localStorage
      localStorage.setItem("token", JSON.stringify(token));
      console.log("Token: ", token);

      // Fetch current user data with the token
      const userData = await axios.get(
        "http://localhost:3000/api/user/current",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userDetails = userData.data; // Store user details from response
      localStorage.setItem("user", JSON.stringify(userDetails));
      console.log("User details: ", userDetails);

      return true; // Successfully logged in
    } catch (error) {
      console.log("User login error: ", error);
      return false; // Error occurred during login
    }
  }

  async function getUserOrder(id) {
    try {
      const res = await axios.get("http://localhost:3000/api/order/" + id);
      const data = await res.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllUsers() {
    try {
      const res = await axios.get("http://localhost:3000/api/user/list");
      const data = await res.data.message;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function getUserCount() {
    try {
      const res = await axios.get("http://localhost:3000/api/user/count");
      const data = await res.data.message;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return { loginUser, getUserOrder, getAllUsers,getUserCount };
};

export default UserApi;
