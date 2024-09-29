import axios from "axios";
import React from "react";

const ItemApi = () => {
  async function getAllItems() {
    try {
      const res = await axios.get("http://localhost:3000/api/item");
      const data = await res.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return { getAllItems };
};

export default ItemApi;
