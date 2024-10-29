import React, { useState } from "react";
import FoodCard from "../../components/cards/FoodCard";
import NavBar from "../../components/navbar/NavBar";

const HomePage = () => {
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
      <div className="flex drop-shadow-xl place-items-top mx-[10%] h-max mt-[2rem] bg-white relative top-[-5rem] rounded-3xl">
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

      <div className="container flex w-full h-max px-40 pt-10 pb-16">
        <div className="flex-1">
        <h1 className="black text-4xl font-bold ">What is Hamro Canteen?</h1>
        <p>
        Hamro Canteen is a comprehensive food ordering and billing web application that replaces the traditional KOT-based (Kitchen Order Ticket) and cash-based transaction systems. Designed specifically for college canteen, Hamro Canteen simplifies the process of ordering and billing meals, making it more efficient and user-friendly.
        </p>
        </div>
        <div className="flex-1 rounded-3xlg" style={{ backgroundImage: "url(/whatis-right.jpeg)", backgroundSize: "contain" }} >
        
        </div>
      </div>

      
    </div>
  );
};

export default HomePage;
