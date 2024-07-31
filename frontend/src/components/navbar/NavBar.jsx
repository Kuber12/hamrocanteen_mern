import React,{useState} from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [cartDropdownOpen, setcartDropdownOpen] = useState(false);
  return (
      <div className="relative bg-[#FFF0E9] w-full h-[18vh] pt-5 items-center  flex justify-center px-20">
        <div className="flex h-[80%] text-xl font-semibold shadow-2xl rounded-full w-[50%] justify-evenly items-center bg-[#FFFFFF] top-10 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact Us</Link>
        </div>
        <div className="absolute right-10">
          <div className="flex gap-5">
            <div onMouseOver={() => setcartDropdownOpen(true)} onMouseLeave={() => setcartDropdownOpen(false)}>
              <Link className="bg-white w-14 h-14 rounded-full" to={"/"}>
              <img className="p-2 w-14 h-14" src="./cart.svg" alt="user"/>
              </Link>
              {cartDropdownOpen && (
                <div className="absolute border-solid border-2 border-black top-14 right-16 bg-white p-2 rounded-2xl shadow-md w-max">
                  <div className="p-5">
                    <div className="text-lg text-center">11 M</div>
                  </div>
                </div>)
              }
              
            </div>
            <div onMouseOver={() => setUserDropdownOpen(true)} onMouseLeave={() => setUserDropdownOpen(false)}>
              <Link className="bg-white w-14 h-14 rounded-full" to={"/"}>
                <img className="p-2 w-14 h-14" src="./user.svg" alt="user"/>
              </Link>
              {userDropdownOpen && (
                <div className="absolute border-solid border-2 border-black top-14 right-0 bg-white p-2 rounded-2xl shadow-md w-max">
                  <div className="p-5">
                    <div className="text-lg text-center">11 M</div>
                    <div className="text-2xl font-bold text-center">Kuber Bajra Shakya</div>
                    <div className="text-lg text-center">9813758998</div>

                    <div className="text-lg mt-2 border-solid border-2 rounded-full p-2 border-black bg-[#EC5856] text-white text-center font-bold">
                      View Orders
                    </div>
                    <div className="text-lg mt-2 border-solid border-2 rounded-full p-2 border-black bg-[#EC5856] text-white text-center font-bold">
                      Sign Out
                    </div>
                  </div>
                </div>)
              }
            </div>
          </div>
        </div>
      </div>
  );
};

export default NavBar;
