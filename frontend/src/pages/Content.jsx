import { Link } from "react-router-dom";

function Content() {
    return (
      <div className="">
        <div className="flex justify-around items-center ">
          <img className="w-[400px]" src="src/assets/favoritebook.jpg" />

          <div>
            <h1 className="text-black text-4xl font-bold">
              Find Your Favorite
            </h1>
            <h2 className="text-blue-500 font-bold text-3xl py-3">
              Book Here!
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing <br></br> elit.
              Aut, voluptatum nostrum! Non assumenda architecto <br></br>{" "}
              voluptate ratione voluptas repellendus quibusdam, dicta libero
              accusamus!
            </p>
            <div className="flex space-x-10 py-3">
              <div>
                <h1 className="text-2xl font-bold">800+</h1>
                <p className="text-sm">Book Listing</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">550+</h1>
                <p className="text-sm">Register User</p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">1200+</h1>
                <p className="text-sm">Book Available</p>
              </div>
            </div>
            <Link to={"/books"}>
              <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
                Explore Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
}


export default Content