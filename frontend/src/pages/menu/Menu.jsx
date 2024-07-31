import React, { useContext, useState } from 'react'
import "./Menu.css"
import NavBar from '../../components/navbar/NavBar';
import FoodCard from '../../components/cards/FoodCard';

const Menu = () => {

    const [menu, setMenu] = useState([
        { id: 1, name: "Momo", price: 5.99 },
        { id: 2, name: "Pizza", price: 12.99 },
        { id: 3, name: "Burger", price: 8.49 },
        { id: 4, name: "Pasta", price: 10.99 },
        { id: 5, name: "Sushi", price: 15.99 },
        { id: 6, name: "Salad", price: 7.99 },
        { id: 7, name: "Taco", price: 6.99 },
        { id: 8, name: "Ramen", price: 11.99 },
        { id: 9, name: "Steak", price: 22.99 },
        { id: 10, name: "Ice Cream", price: 4.99 },
        { id: 11, name: "Sandwich", price: 5.49 },
        { id: 12, name: "Fried Rice", price: 9.99 },
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
              {menu.map((menu) => (
                <FoodCard key={menu.id} menu={menu}/>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Menu
