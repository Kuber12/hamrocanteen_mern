import React, { useContext, useEffect, useState } from "react";
import "./Menu.css";
import NavBar from "../../components/navbar/NavBar";
import FoodCard from "../../components/cards/FoodCard";
import ItemApi from "../../apis/ItemApi";
const Menu = () => {
  const { getAllItems } = ItemApi();
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getAllItems()
      .then((res) => {
        console.log(res);
        setMenu(res)
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <div className=" w-full h-auto bg-[#FBFBFB] ">
      <NavBar />

      {/* first section  */}
      <div className=" w-full h-max px-40 pt-10 pb-16 shadow-xl rounded-b-[8rem] bg-[#FFF0E9] ">
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
          Today&apos;s <span className="text-[#EC5856]">Menu</span>
        </h1>

        <div className="grid items-center w-full h-auto grid-cols-3 gap-20 px-10 py-20 justify-items-center">
          {menu.map((menu) => (
            <FoodCard key={menu.id} menu={menu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
