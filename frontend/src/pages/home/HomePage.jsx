import React, { useState } from "react";
import FoodCard from "../../components/cards/FoodCard";
import NavBar from "../../components/navbar/NavBar";

const HomePage = () => {
  const [data, setData] = useState([
    { id: 1, name: "Momo" },
    { id: 2, name: "Momo" },
    { id: 3, name: "Momo" },
    { id: 4, name: "Momo" },
    { id: 5, name: "Momo" },
    { id: 6, name: "Momo" },
    { id: 7, name: "Momo" },
    { id: 8, name: "Momo" },
    { id: 9, name: "Momo" },
    { id: 10, name: "Momo" },
    { id: 11, name: "Momo" },
    { id: 12, name: "Momo" },
  ]);
  return (
    <div className=" w-full h-auto bg-[#FBFBFB] ">
      <NavBar />
      {/* first section  */}
      <div className="w-full h-max px-40 pt-10 pb-16 shadow-xl rounded-b-[8rem] bg-[#FFF0E9] ">
        <div className="w-full h-full space-y-2 text-6xl font-bold">
          <h1>Order Now,</h1>
          <h1 className="text-primary text-6xl">Enjoy Later</h1>
          <div className="flex bg-primary w-max rounded-full place-items-center mt-4">
            <div className="m-2  rounded-full bg-alternate">
              <img className="p-2 w-14 h-14" src="./play.png" alt="play"/>
            </div>
            <span className="text-white text-2xl mr-2">How to order?</span>
          </div>
        </div>
      </div>
      <div className="flex drop-shadow-2xl place-items-top mx-[22%] h-max mt-[2rem] bg-white relative top-[-5rem] rounded-lg">
        <div className="flex flex-1 m-6">
          <img className="p-2 w-14 h-14 bg-alternate rounded-full" src="./play.png" alt="play"/>
          <div className="flex flex-col ml-3">
            <span className="text-primary text-2xl">Online Order</span>
            <span>Customers can pre-order their desired food.</span>
          </div>
        </div>
        <div className="flex flex-1 m-6">
          <img className="p-2 w-14 h-14 bg-alternate rounded-full" src="./play.png" alt="play"/>
          <div className="flex flex-col ml-3">
            <span className="text-primary text-2xl">Prevent Waste</span>
            <span>As Canteen estimate of how much to make for a particular day they can make the right amount.</span>
          </div>
        </div>
        <div className="flex flex-1 m-6">
          <img className="p-2 w-14 h-14 bg-alternate rounded-full" src="./play.png" alt="play"/>
          <div className="flex flex-col ml-3">
            <span className="text-primary text-2xl">Managed receipt</span>
            <span>Students as well as the business can get detailed report of sales in their canteen</span>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default HomePage;
