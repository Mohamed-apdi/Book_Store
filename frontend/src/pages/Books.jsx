// import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
// swiper
// import { useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./bookswiper.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from 'swiper/modules';

function Books() {
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:2000/book")
        .then((res) => setData(res.data));
    };
    fetch();
  });

  // const delateBook = (id) => {
  //   axios
  //     .delete(`http://localhost:2000/delete/${id}`)
  //     .then(() => {
  //       toast("delete  successfully", {
  //         position: "top-right",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //       });
  //       Books();
  //     })
  //     .catch((eror) => {
  //       console.log(eror);
  //     });
  // };

  // add cart
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

  return (
    <>
    <div className=" flex justify-between px-5 pt-5 ">
        <h1 className=" text-3xl font-serif font-bold pl-5">Best New Arrivals</h1>
        <Link to={"/books"}>
        <p className="text-2xl cursor-pointer hover:text-teal-500">All Products <FaAngleRight className=" inline" /></p>
        </Link>
      </div>
    <div className="pb-20 px-32 cursor-pointer">
      {/* <Header /> */}
      

      <Swiper
        slidesPerView={4}
        spaceBetween={-45}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className=" w-[700px] book bg-orange-500">
          {Data &&
            Data.map((item) => (
              <>
                <SwiperSlide className="p-10" key={item._id}>
                  <div className="flex bg-white w-[180px] h-[280px] object-cover items-center  rounded-md flex-col relative box">
                    <div className="flex bg-amber-500 p-2 rounded-md mt-6 w-full justify-around icons ">
                     
                      <Link to={`/readmore/${item._id}`}>
                        <AiFillEye className="a" />
                      </Link>
                    </div>
                    <img
                      className="w-full h-40 rounded-t-md"
                      src={item.image}
                    />
                    <h1 className="text-[15px] font-bold">{item.bookname}</h1>
                    <p className="text-gray-400">{item.author}</p>
                    <p className="text-[16px]">${item.price}</p>
                    <Link></Link>
                    <button onClick={() => addToCart(item)} className="inline-block w-[93%] px-6 py-[7px] text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none">
                    Add to Cart
                    </button>
                  </div>
                </SwiperSlide>
              </>
            ))}
        </div>
      </Swiper>

      <ToastContainer />
    </div></>
  );
}

export default Books;
