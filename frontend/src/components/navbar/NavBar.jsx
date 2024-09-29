import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReloadContext } from "../../context/ReloadContextProvider";

import ItemApi from "../../apis/ItemApi";
const NavBar = () => {
  const { addToOrder } = ItemApi();
  const { reload, setReload } = useContext(ReloadContext);
  const [cartItem, setCartItem] = useState([]);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [cartDropdownOpen, setcartDropdownOpen] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [userArray, setUserArray] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserArray(user);
    }
  }, []);
  console.log(userArray);

  const navigate = useNavigate();

  useEffect(() => {
    (() => {
      const price = cartItem.reduce((a, b) => {
        return Number.parseInt(a) + Number.parseFloat(b.price);
      }, 0);
      console.log(price);
      setGrandTotal(price);
    })();
  }, [cartItem]);
  console.log(cartItem);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      setCartItem(cart);
      // console.log(cart)
    }
  }, [reload]);

  // Handler to initiate payment when the button is clicked
  const handlePayment = () => {
    const value = {
      userId: userArray.id,
      cart: [...cartItem],
      paymentMethod: "Cash",
      status: "Not Paid",
    };
    addToOrder(value)
      .then((res) => {
        console.log(res);
        alert(res);
      })
      .catch((err) => console.log(err));
  };

  //takes item's id
  function handleRemoveFromCart(id) {
    console.log(id);
    const updatedItem = cartItem.filter((item) => item._id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedItem));
    setReload(!reload);
  }

  return (
    <div className="relative bg-[#FFF0E9] w-full h-[16vh] pt-5 items-center  flex justify-center px-20">
      <div className="absolute w-24 h-24 left-10">
        <img className="w-full h-full" src="Logo.png" alt="Logo Image" />
      </div>
      <div className="flex h-[80%] text-xl font-semibold shadow-2xl rounded-full w-[50%] justify-evenly items-center bg-[#FFFFFF] top-10 ">
        <Link to={"/"}>Home</Link>
        <Link to={"/menu"}>Menu</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </div>
      <div className="absolute right-10">
        <div className="flex gap-5">
          <div
            onMouseOver={() => setcartDropdownOpen(true)}
            onMouseLeave={() => setcartDropdownOpen(false)}
          >
            <Link className="bg-white rounded-full w-14 h-14" to={"/"}>
              <img className="p-2 w-14 h-14" src="./cart.svg" alt="user" />
            </Link>
            {cartDropdownOpen && (
              <div className="absolute p-2 bg-white border-2 border-black border-solid shadow-md top-14 right-16 rounded-2xl w-[25rem] ">
                <div className="flex flex-col p-5 gap-y-2">
                  <div className="text-lg font-bold text-center">My Cart</div>
                  {cartItem.map((item, i) => (
                    <div
                      key={i}
                      className="w-full flex justify-between px-2 items-center h-[60px]"
                    >
                      <div className="font-bold">{item.name}</div>
                      <div>x {item.itemCount}</div>
                      <div>Rs {item.price}</div>
                      <button onClick={() => handleRemoveFromCart(item._id)}>
                        X
                      </button>
                    </div>
                  ))}
                  <div className="flex justify-center w-full gap-2 px-2 my-2">
                    <span className="font-bold text-red-500">Grand Total:</span>{" "}
                    Rs {grandTotal}{" "}
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <button
                      className="px-2 py-1 font-bold bg-primary text-white bg-red-500 border-[3px] border-black rounded-2xl"
                      onClick={handlePayment}
                    >
                      CheckOut
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {userArray.username ? (
            <div
              onMouseOver={() => setUserDropdownOpen(true)}
              onMouseLeave={() => setUserDropdownOpen(false)}
            >
              <Link className="bg-white rounded-full w-14 h-14" to={"/"}>
                <img className="p-2 w-14 h-14" src="./user.svg" alt="user" />
              </Link>
              {userDropdownOpen && (
                <div className="absolute right-0 p-2 bg-white border-2 border-black border-solid shadow-md top-14 rounded-2xl w-max">
                  <div className="p-5">
                    {/* <div className="text-lg text-center">11 M</div> */}
                    <div className="text-2xl font-bold text-center">
                      {userArray.username}
                    </div>
                    {/* <div className="text-lg text-center">9813758998</div> */}

                    <Link to="/vieworder">
                      <div className="text-lg mt-2 border-solid border-2 rounded-full p-2 border-black bg-[#EC5856] text-white text-center font-bold">
                        View Orders
                      </div>
                    </Link>

                    {typeof userArray.username == "string" &&
                    userArray.username.length > 0 ? (
                      <div
                        className="text-lg mt-2 cursor-pointer border-solid border-2 rounded-full p-2 border-black bg-[#EC5856] text-white text-center font-bold"
                        onClick={() => {
                          localStorage.removeItem("user");
                          localStorage.removeItem("token");
                          window.location.reload();
                        }}
                      >
                        Sign Out
                      </div>
                    ) : (
                      <div
                        className="text-lg mt-2 cursor-pointer border-solid border-2 rounded-full p-2 border-black bg-[#EC5856] text-white text-center font-bold"
                        onClick={() => navigate("/")}
                      >
                        Sign in
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div
              onMouseOver={() => setUserDropdownOpen(true)}
              onMouseLeave={() => setUserDropdownOpen(false)}
            >
              <Link className="bg-white rounded-full w-14 h-14" to={"/signin"}>
                <img className="p-2 w-14 h-14" src="./user.svg" alt="user" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
