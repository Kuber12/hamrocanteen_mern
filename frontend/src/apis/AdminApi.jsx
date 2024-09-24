import axios from "axios";
import React from "react";

const AdminApi = () => {
  const URL = "http://localhost:3000";

  async function adminLogin(admin) {
    try {
      const EndPoint = `${URL}/api/admin/login`;
      console.log(EndPoint);
     
      const response = await axios.post(EndPoint, admin);
      const token = response.data.message;

      localStorage.setItem("token", JSON.stringify(token));
      console.log("Token:", token);

     
      const adminDetailsEndpoint = `${URL}/api/admin/current`; 
      const adminDetails = await axios.get(adminDetailsEndpoint, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      const adminData = await adminDetails.data;

      console.log("Admin details:", JSON.stringify(adminData));
      localStorage.setItem("user", JSON.stringify(adminData));

      return true; // Login successful
    } catch (error) {
      console.error("Admin login error:", error);
      return false; // Login failed
    }
  }

  return { adminLogin };
};

export default AdminApi;
