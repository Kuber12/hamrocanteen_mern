import axios from "axios";
import React from "react";

const ItemApi = () => {
  async function getAllItems() {
    try {
      const res = await axios.get("http://localhost:3000/api/item");
      const data = await res.data;
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function addToOrder(value) {
    console.log(value);
    const url = "http://localhost:3000/api/order";
    try {
      const res = await axios.post(url, value);
      const data = await res.data;
      // console.log(data);
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
      const res = await axios.post("http://localhost:3000/api/item/add", value);
      const data = await res.data;
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function predict() {
    //   {
    //     "name":"Samosa",
    //     "price": 30,
    //     "itemImg":"",
    //     "availableDays": ["Sunday","Monday","Tuesday","Wednesday"],
    //     "unit":"Plate"
    // }
    try {
      const res = await axios.get("http://localhost:3000/api/order/predict");
      const data = await res.data;
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }


  async function getItemCount() {
    //   {
    //     "name":"Samosa",
    //     "price": 30,
    //     "itemImg":"",
    //     "availableDays": ["Sunday","Monday","Tuesday","Wednesday"],
    //     "unit":"Plate"
    // }
    try {
      const res = await axios.get("http://localhost:3000/api/item/count");
      const data = await res.data.count;
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return { getAllItems, addToOrder, predict,getItemCount };
};

export default ItemApi;
