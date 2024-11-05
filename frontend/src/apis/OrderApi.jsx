import axios from "axios";

const AdminApi = () => {
  const URL = "http://localhost:3000";

  async function getOrders() {
    try {
      const EndPoint = `${URL}/api/order`;
      console.log(EndPoint);
     
      const response = await axios.get(EndPoint);
      const orders = response.data;

      return orders;
    } catch (error) {
      console.error("Get orders error:", error);
      return false; // Error occurred
    }
  }

  return { getOrders };
};

export default AdminApi;

