import { NavLink } from "react-router-dom"
import { MdAccountCircle } from "react-icons/md"
import { HiOutlineLogout } from "react-icons/hi"
import { GiBookStorm } from "react-icons/gi"
import { GiShoppingBag } from "react-icons/gi"
import { useState, useEffect } from "react";
function Header() {


  const auth = localStorage.getItem("token");

   const handleLogout = () => {
     localStorage.removeItem("token");
     window.location.reload();
  };
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

    return (
      <div
        className="bg-gradient-to-r from-blue-400 to-emerald-400 p-2 flex items-center justify-around space-x-60 fixed top-0 right-0 left-0 z-50 "
        aria-label="global"
      >
        <NavLink to={"/"}>
          <h1 className="text-2xl font-bold text-white cursor-pointer">
            <GiBookStorm className="inline text-white font-bold" />{" "}
            <label className="text-white cursor-pointer">Store</label>
          </h1>
        </NavLink>
        <div className="text-white space-x-10 text-[18px] flex items-center">
          <NavLink to="/" className={"hover:text-blue-800"}>
            Home
          </NavLink>
          <NavLink to="/books" className={"hover:text-blue-800"}>
            Books
          </NavLink>
          <NavLink to="/dashbord" className={"hover:text-blue-800"}>
            Dashboard
          </NavLink>
       
          <div className="relative">
            <NavLink NavLink to="/cart">
            <GiShoppingBag className="hover:text-blue-800 transition-all text-2xl inline" />
            </NavLink>
            <span className="s absolute top-0 right-0 mt-[-5px] mr-[-5px] text-[10px] bg-red-600 w-[17px] rounded-full text-white text-center h-[17px]">
            {cartItems.length}
          </span>
          </div>
          <NavLink to="/login">
            {auth ? null : (
              <MdAccountCircle
                className={
                  "hover:text-blue-800 transition-all text-2xl inline mt-1 cursor-pointer"
                }
              />
            )}
          </NavLink>
          {auth ? (
            <HiOutlineLogout
              className={"hover:text-blue-800 transition-all text-2xl mt-1 cursor-pointer "}
              onClick={handleLogout}
            />
          ) : null}
        </div>
      </div>
    );
}

export default Header