import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
function ReadMore() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch book details by ID using your API endpoint
    axios
      .get(`http://localhost:2000/books/single/${bookId}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [bookId]);

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
    <div>
      <Header />
      <Link to={"/books"}>
        <FaRegArrowAltCircleLeft className=" absolute text-white top-16 text-3xl ml-4 " /></Link>
      <div>
        {book ? (
          <div className=" mt-10 p-5 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
           

            <div className="ml-20 flex space-x-36  border-b-2 p-2">
              <img
                className="w-[230px] h-[270px]"
                src={book.image}
                alt={book.bookname}
              />
              <div className="space-y-4 border-l-2 mb-[-8px]">
                <h1 className="text-3xl text-white p-2">
                  <span className="text-white font-bold">Book:</span>{" "}
                  {book.bookname}
                </h1>
                <h1 className="text-white text-3xl p-2">
                  <span className="text-white font-bold">Author:</span>{" "}
                  {book.author}
                </h1>
                <p className="text-white text-2xl p-2">
                  {" "}
                  <span className="text-white font-bold">Price:</span> $
                  {book.price}
                </p>
                <button onClick={() => addToCart(book)} className="inline-block w-[90%] ml-2 px-6 py-[7px] text-xs  leading-6 text-center text-white uppercase transition bg-teal-500 rounded shadow ripple hover:shadow-lg hover:bg-teal-600 font-bold focus:outline-none">
                  shop now
                </button>
              </div>
            </div>
            <h2 className="text-2xl text-white font-semibold ml-20">
              Description:
            </h2>
            <p className="text-[18px] ml-20 mt-5 w-[700px] text-start text-white pb-3">
              {book.description}
            </p>
            <p className="text-[18px] ml-20 mt-5 w-[700px] text-start text-white pb-3">
              {book.descriptionOne}
            </p>
            <p className="text-[18px] ml-20 mt-5 w-[700px] text-start text-white">
              {book.descriptionTwo}
            </p>
          </div>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </div>
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default ReadMore;
