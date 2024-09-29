import React, { useEffect, useState } from "react";
import UserApi from "../../apis/UserApi";
import FoodCard from "../../components/cards/FoodCard";
const ViewOrder = () => {
  const { getUserOrder } = UserApi();
  const [itemOrder, setItemOrder] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  useEffect(() => {
    console.log("hello");
    getUserOrder(user?.id)
      .then((res) => {
        console.log(res);
        setItemOrder(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      This is view order
      <FoodCard menu={itemOrder} />
    </div>
  );
};

export default ViewOrder;
