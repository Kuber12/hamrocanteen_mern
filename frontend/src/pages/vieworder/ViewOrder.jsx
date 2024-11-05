import React, { useEffect, useState } from "react";
import UserApi from "../../apis/UserApi";
import FoodCard from "../../components/cards/FoodCard";
import NavBar from "../../components/navbar/NavBar";

const ViewOrder = () => {
  const { getUserOrder } = UserApi();
  const [itemOrder, setItemOrder] = useState([]);
  const [openOrder, setOpenOrder] = useState({}); // State to manage open/close status for each order

  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  console.log(itemOrder)

  useEffect(() => {
    // Fetch user orders
    if (user?.id) {
      getUserOrder(user.id)
        .then((res) => setItemOrder(res))
        .catch((err) => console.error(err));
    }
  }, []);

  // Function to toggle individual card
  const toggleCard = (index) => {
    setOpenOrder((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the specific order
    }));
  };

  return (
    <>
      <NavBar />
      <div className="w-full max-w-4xl p-6 mx-auto space-y-6">
        <h1 className="w-full mt-5 mb-10 text-5xl">Your Orders</h1>
        {itemOrder?.map((order, index) => (
          <div key={index}>
            {/* Main Card */}
            <div
              className="p-6 transition-shadow bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg"
              onClick={() => toggleCard(index)} // Toggle specific card
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">#{index + 1} Your Orders</h2>
                  <p className="text-gray-600">Grand Total: {order.grandTotal}</p>
                  <p className="text-gray-600">
                    Payment Method: {order.paymentMethod}
                  </p>
                  <p className="font-bold text-gray-600">Status: {order.status}</p>
                </div>
                <p className="text-gray-600">
                  Order Date: {new Date(order.orderDate).toLocaleString()}
                </p>
              </div>
            </div>
  
            {/* Sub-Cards (conditionally rendered for the specific card) */}
            {openOrder[index] && (
              <div className="mt-2 space-y-4">
                <h3 className="text-lg font-medium">Order Details</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {order?.items?.map((subCard, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex justify-between p-4 px-10 transition-shadow bg-gray-100 rounded-lg shadow hover:shadow-md"
                    >
                      <h4 className="font-semibold text-md">
                        {subCard?.name}
                      </h4>
                      <div>
                        <p className="text-gray-600">Price: {subCard?.price}</p>
                        <p className="text-gray-600">Count: {subCard?.itemCount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}  

export default ViewOrder;
