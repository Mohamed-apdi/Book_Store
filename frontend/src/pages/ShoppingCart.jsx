import {AiFillDelete} from "react-icons/ai"
import { useState, useEffect } from "react";
import Header from "./Header";
import {TbSquareLetterX} from "react-icons/tb"
import { Link } from "react-router-dom";
function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    // Load cart items from local storage when the component mounts
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const removeFromCart = (item) => {
    // Remove an item from the cart
    const updatedCart = cartItems.filter(
      (cartItem) => cartItem._id !== item._id
    );
    setCartItems(updatedCart);
    // Update local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  //   const calculateTotalPrice = () => {
  //     const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  //     return totalPrice.toFixed(2);
  //   };

  //  const previousItem = () => {
  //    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  //  };

  //  const nextItem = () => {
  //    setCurrentIndex((prevIndex) =>
  //      Math.min(cartItems.length - 1, prevIndex + 1)
  //    );
  //  };
  // Define the number of items to display per row
  const itemsPerRow = 4;

  // Calculate the number of pages
  // const numPages = Math.ceil(cartItems.length / itemsPerRow);

  // Calculate the current page based on the currentIndex
  const currentPage = Math.floor(currentIndex / itemsPerRow);

  // Calculate the start and end indices for items on the current page
  const startIndex = currentPage * itemsPerRow;
  const endIndex = Math.min(startIndex + itemsPerRow, cartItems.length);

  const previousItem = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - itemsPerRow));
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(cartItems.length - 1, prevIndex + itemsPerRow)
    );
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return totalPrice.toFixed(2);
  };

  
  return (
    <div>
      <Header />
      <div>
        <img className=" h-screen w-full" src="src/assets/BG.jpg" />
        <div className="mt-16 w-[900px] absolute top-0 mx-64 backdrop-blur-sm shadow-md p-3">
          <div className="flex justify-between mb-3 bg-slate-100 items-center px-4">
            <h1 className="text-1xl font-bold  text-black text-center items-center p-1 ">
              Shopping Cart
            </h1>
            <Link to={"/"}>
              <TbSquareLetterX className=" text-2xl  font-bold" />
            </Link>
          </div>
          <div className="space-y-2">
            {cartItems.slice(startIndex, endIndex).map((item) => (
              <div key={item._id}>
                <div className="shadow-md bg-white flex justify-between py-2 px-5 rounded-md items-center">
                  <img
                    src={item.image}
                    alt={item.bookname}
                    className="w-14 h-14 rounded-sm"
                  />
                  <div className=" ml-10">
                    <h2 className="text-lg font-bold w-[700px] ">
                      {item.bookname}
                    </h2>
                    <p className="text-gray-400">{item.author}</p>
                    <p className="text-sm ">${item.price}</p>
                  </div>

                  <AiFillDelete
                    className=" text-3xl cursor-pointer"
                    onClick={() => removeFromCart(item)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-center">
            <button
              onClick={previousItem}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Previous
            </button>
            <button
              onClick={nextItem}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md ml-2"
            >
              Next
            </button>
          </div>
          <div className="mt-3  text-center">
            <h2 className="text-xl font-bold mx-auto">
              Total Price: ${calculateTotalPrice()}
            </h2>
            <button  className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md">
              process to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
