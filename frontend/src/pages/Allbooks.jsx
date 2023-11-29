import Header from "./Header"
import axios from "axios"
import { useState, useEffect } from "react"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify"
import { Link } from "react-router-dom";
import {AiFillEye} from "react-icons/ai"
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
// import {BiArrowBack} from "react-icons/bi"
function Allbooks() {
  // shop cart
  const addToCart = (item) => {
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemInCart = existingCartItems.find(
      (cartItem) => cartItem._id === item._id
    );

    if (!itemInCart) {
      existingCartItems.push(item);
      localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
      toast("Added to cart successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
      });
    } else {
      toast("This item is already in the cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
      });
    }
  };

  const [Data, setData] = useState()
  useEffect(() => {
    const fetch = async () => {
     await axios.get("http://localhost:2000/book").then((res) => setData(res.data))
    }
    fetch()
  })


    return (
        <div className=" h-screen mt-20 ">
        <Header />
        <Link to={"/"}>
        <FaRegArrowAltCircleLeft className=" absolute text-black top-16 text-3xl ml-4" /></Link>
        <h1 className="text-4xl font-bold text-black text-center animated-text">
         Words That Wander
        </h1>

        <div className=" grid grid-cols-4 h-screen w-[700px] ml-48  gap-x-72 gap-y-10  mt-10 static mb-5">
          {Data &&
            Data.map((item) => (
              <>
                <div className="flex bg-white w-[200px] h-[310px] object-cover items-center  rounded-md flex-col relative box">
                  <div className="flex bg-amber-500 p-2 rounded-md mt-6 w-full justify-around icons ">
                   
                    <Link to={`/readmore/${item._id}`}>
                      <AiFillEye className="a" />
                    </Link>
                  </div>
                  <img className="w-full h-48 rounded-t-md" src={item.image} />
                  <h1 className="text-[15px] font-bold">{item.bookname}</h1>
                  <p className="text-gray-400">{item.author}</p>
                  <p className="text-[16px]">${item.price}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="inline-block w-[93%] px-6 py-[7px] text-xs  leading-6 text-center text-white uppercase transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 font-bold focus:outline-none"
                  >
                    Add to Cart
                  </button>
                </div>
              </>
            ))}
        </div>

        <ToastContainer />
      </div>
    );
}

export default Allbooks