import { useState } from "react";
// import { Link } from "react-router-dom";
import { Cards } from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./bookswiper.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from 'swiper/modules';

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search?q=${searchTerm}`);
      setSearchResults(response.data);
      setSearchTerm("");
    } catch (error) {
      console.error(error);
    }
  };
   const handleSwiperSlideClick = () => {
     // Clear searchResults and searchTerm when a SwiperSlide is clicked
     setSearchResults([]);
     setSearchTerm("");
   };

  return (
    <div className="flex justify-around items-center hero h-[97vh]">
      <div className="mahdi">
        <h1 className="text-slate-900 text-5xl font-bold mb-2">
        Best Sellers of the Week
        </h1>
        <h2 className=" text-slate-700 text-3xl font-bold mb-2">
          For the best prices
        </h2>
        <p className="text-black text-sm w-[600px] mb-1">
          Find and read more books you'll love, and keep track of the books you
          want to read. Be part of the world's largest community of books lovers
          on Goodreads.
        </p>
        <input
          type="text"
          className="px-2 py-3 text-sm w-60 rounded-r-none focus:outline-none rounded shadow mt-3"
          placeholder="Search for books by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          disabled={!searchTerm}
          className="inline-block px-6 py-[10.3px] text-sm cursor-pointer rounded-l-none font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
        >
          Search
        </button> 
        <div className="absolute top-[460px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={-100}
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {searchResults.map((book) => (
              <>
                <SwiperSlide
                  onClick={handleSwiperSlideClick}
                  key={book._id}
                >
                  <Link to={`/readmore/${book._id}`}>
                    <div
                      className="object-cover px-4 py-2  w-[200px] -mt-7 shadow-md bg-slate-700 rounded-md hover:shadow-sm"
                      key={book._id}
                    >
                      <img
                        className="w-[70px] h-[70px] rounded-md mx-auto"
                        src={book.image}
                      />
                      <p className="font-bold text-white text-[12px]">
                      {book.bookname}
                      </p>
                      <p className="t text-[12px] text-white">{book.author}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default Home;
