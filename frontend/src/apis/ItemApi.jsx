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

  async function addToOrder(value) {
    const url = "http://localhost:3000/api/order";
    try {
      const res = await axios.get(url, value);
      const data = await res.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  async function add(value) {
    //   {
    //     "name":"Samosa",
    //     "price": 30,
    //     "itemImg":"",
    //     "availableDays": ["Sunday","Monday","Tuesday","Wednesday"],
    //     "unit":"Plate"
    // }
    try {
      const res = await axios.get("http://localhost:3000/api/item/add", value);
      const data = await res.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return { getAllItems,addToOrder };
};

export default ItemApi;
