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
      <div className=" w-full h-[80vh] px-10 py-16 shadow-xl rounded-b-[8rem] bg-[#FFF0E9] ">
        <div className="w-[10rem] h-[10rem] ">
          <img className="w-full h-full" src="Logo.png" alt="Logo Image" />
        </div>
        <div className="w-full h-full space-y-2 text-6xl font-bold">
          <h1>Hamro</h1>
          <h1 className="text-[#EC5856]   text-6xl ">Canteen</h1>
        </div>
      </div>

      {/* second section  */}
      <div className=" w-full py-10 h-[100vh] ">
        <h1 className="text-4xl font-bold text-center">
          Today's <span className="text-[#EC5856]">Menu</span>
        </h1>

        <div className="grid items-center w-full h-auto grid-cols-3 gap-20 px-10 py-20 justify-items-center">
          {data.map(() => (
            <FoodCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
