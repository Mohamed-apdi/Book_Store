import { NavLink , Link } from "react-router-dom"
import { MdAccountCircle } from "react-icons/md"
import { HiOutlineLogout } from "react-icons/hi"
import { GiShoppingBag } from "react-icons/gi"
import { useState, useEffect } from "react";

function Header() {


  const auth = localStorage.getItem("token");

   const handleLogout = () => {
     localStorage.removeItem("token");
     window.location.reload();
  };
  const [cartItems, setCartItems] = useState([]);
  const [navbarBg, setNavbarBg] = useState("bg-transparent"); // Initial background color
  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);

     // Add scroll event listener
     window.addEventListener("scroll", handleScroll);

     // Cleanup the event listener on component unmount
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
  }, []);


  const handleScroll = () => {
    // Check the scroll position and update the navbar background
    if (window.scrollY > 0) {
      setNavbarBg("bg-gradient-to-b from-sky-400 to-sky-200"); // Change to your desired background color
    } else {
      setNavbarBg("bg-transparent");
    }
  };

  function refreshPage(){
    window.location.reload();
} 
  
    return (
      <div
        className={`nav-bg p-2 flex items-center justify-around space-x-60 fixed top-0 right-0 left-0 z-50 ${navbarBg} `}
        aria-label="global"
      >
        
          <h1 className="text-2xl font-bold text-white cursor-pointer" onClick={refreshPage}>
          <NavLink to={"/"}>
            <label className=" text-amber-500 cursor-pointer tooltip4">Store</label>
            </NavLink>
          </h1>
       
        <div className="text-white space-x-10 text-[18px] flex items-center">
        <NavLink to="/" className="tooltip1 text-white " data-text="Home">
        Home
      </NavLink>
      <NavLink to="/books" className="tooltip2 text-white " data-text="Books">
        Books
      </NavLink>
      <NavLink to="/adminL" className="tooltip3 text-white " data-text="Dashboard">
        Dashboard
      </NavLink>
       
          <div className="relative tooltip7">
            <NavLink NavLink to="/cart">
            <GiShoppingBag className=" text-white  transition-all text-2xl inline" />
            </NavLink>
            <span className=" absolute top-0 right-0 mt-[-5px] mr-[-5px] text-[10px] bg-red-600 w-[17px] rounded-full text-white text-center h-[17px]">
            {cartItems.length}
          </span>
          </div>
          <NavLink to="/login" className={"tooltip5"}>
            {auth ? null : (
              <MdAccountCircle
                className={
                  " text-white transition-all text-2xl inline mt-1 cursor-pointer"
                }
              />
            )}
          </NavLink>
          <Link className={"tooltip6"}>
          {auth ? (
            <HiOutlineLogout
              className={" text-white transition-all text-2xl mt-1 cursor-pointer "}
              onClick={handleLogout}
            />
          ) : null}
          </Link>
        </div>
      </div>
    );
}

export default Header