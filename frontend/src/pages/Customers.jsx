import { AiTwotoneStar } from "react-icons/ai"
import { BsStarHalf } from "react-icons/bs"
// import { useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./bookswiper.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from 'swiper/modules';

const Customers = () => {
  return (
    <div className="mb-20">
      <h1 className="text-4xl font-bold text-center pb-4">
        Our Customer's Reveiw
      </h1>
      <div className="flex justify-center px-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
          <SwiperSlide className="p-10">
            <div className="p-2 bg-white shadow-current shadow-xl w-[300px] rounded-md hover:bg-gradient-to-r from-sky-400 to-blue-500 transition-all cursor-pointer">
              <p className="flex text-amber-600 text-[18px]">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <BsStarHalf />
              </p>
              <p className="py-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                numquam quaerat consequatur quasi maiores ipsa vitae dolorem,
                voluptatem harum praesentium similique. Accusantium, et.
              </p>
              <div className="text-center">
                <img
                  className="w-[40px] mx-auto h-[40px] rounded-full"
                  src="src/assets/pic1.jpg"
                />
                <div className="py-3">
                  <h1 className="font-bold">Thomas</h1>
                  <p className="text-sm">CEO,Sigma Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-10">
            <div className="p-2 bg-white shadow-current shadow-xl w-[300px] rounded-md  hover:bg-gradient-to-r from-sky-400 to-blue-500 transition-all cursor-pointer">
              <p className="flex text-amber-600 text-[18px]">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <BsStarHalf />
              </p>
              <p className="py-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                numquam quaerat consequatur quasi maiores ipsa vitae dolorem,
                voluptatem harum praesentium similique. Accusantium, et.
              </p>
              <div className="text-center">
                <img
                  className="w-[40px] mx-auto h-[40px] rounded-full"
                  src="src/assets/pic2.jpg"
                />
                <div className="py-3">
                  <h1 className="font-bold">John Deo</h1>
                  <p className="text-sm">CEO,CIT Company</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-10">
            <div className="p-2 bg-white shadow-current shadow-xl w-[300px] rounded-md  hover:bg-gradient-to-r from-sky-400 to-blue-500 transition-all cursor-pointer">
              <p className="flex text-amber-600 text-[18px]">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <BsStarHalf />
              </p>
              <p className="py-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                numquam quaerat consequatur quasi maiores ipsa vitae dolorem,
                voluptatem harum praesentium similique. Accusantium, et.
              </p>
              <div className="text-center">
                <img
                  className="w-[40px] mx-auto h-[40px] rounded-full"
                  src="src/assets/pic3.jpg"
                />
                <div className="py-3">
                  <h1 className="font-bold">Sovia</h1>
                  <p className="text-sm">Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-10">
            <div className="p-2 bg-white shadow-current shadow-xl w-[300px] rounded-md  hover:bg-gradient-to-r from-sky-400 to-blue-500 transition-all cursor-pointer">
              <p className="flex text-amber-600 text-[18px]">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <BsStarHalf />
              </p>
              <p className="py-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                numquam quaerat consequatur quasi maiores ipsa vitae dolorem,
                voluptatem harum praesentium similique. Accusantium, et.
              </p>
              <div className="text-center object-cover">
                <img
                  className="w-[40px] mx-auto h-[40px] rounded-full"
                  src="src/assets/pic4.jpg"
                />
                <div className="py-3">
                  <h1 className="font-bold">Suad</h1>
                  <p className="text-sm">Software Eng</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-10">
            <div className="p-2 bg-white shadow-current shadow-xl w-[300px] rounded-md  hover:bg-gradient-to-r from-sky-400 to-blue-500 transition-all cursor-pointer">
              <p className="flex text-amber-600 text-[18px]">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <BsStarHalf />
              </p>
              <p className="py-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                numquam quaerat consequatur quasi maiores ipsa vitae dolorem,
                voluptatem harum praesentium similique. Accusantium, et.
              </p>
              <div className="text-center">
                <img
                  className="w-[40px] mx-auto h-[40px] rounded-full"
                  src="src/assets/profile.jpg"
                />
                <div className="py-3">
                  <h1 className="font-bold">EMMA</h1>
                  <p className="text-sm">Graphic Design</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Customers