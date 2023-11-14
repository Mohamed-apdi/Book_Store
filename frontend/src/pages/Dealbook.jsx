import { Link } from "react-router-dom";

function Dealbook() {
    return (
      <div className="bg-[#f3f3f3] flex items-center flex-wrap gap-40 mt-36 mb-24 px-12">
        <div className="flex-1 flex-grow flex-shrink w-42rem">
          <h3 className="text-[32px] text-blue-600 pb-3">deal of the day</h3>
          <h1 className="text-[34px] text-black">upto 50% off</h1>
          <p className="text-2xl text-stone-700 leading-2">
            the magical world of incredible discounts - upto 75% off! There no
            better feeling than finding your favorite products
          </p>
          <Link to={"/books"}>
            <button className="border p-2 mt-3 text-white border-amber-500 rounded-sm mb-2  bg-amber-500 hover:border-amber-500  hover:border-2">
              Books
            </button>
          </Link>
        </div>
        <div className="flex-1 flex-grow flex-shrink w-42rem ml-40">
          <img
            className="w-[70%] rounded-lg"
            src="https://i.pinimg.com/originals/3d/28/30/3d2830f396b067447b135942d7d1f8aa.jpg"
          />
        </div>
      </div>
    );
}

export default Dealbook