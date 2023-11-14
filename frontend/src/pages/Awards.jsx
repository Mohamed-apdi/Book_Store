import { Link } from "react-router-dom";

const Awards = () => {
  return (
    
    <div className="flex justify-between px-20 py-5 bg-gradient-to-r from-sky-400 to-blue-500 items-center mb-10 mt-10">
      <div>
        <h1 className="text-3xl font-bold pb-3">
          2023 National Book Awards for Fiction <br></br>
          Shortlist
        </h1>
        <Link to={"/books"}>
          <button className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none">
            Explore Now
          </button>
        </Link>
      </div>
      <img className="w-[250px]" src="src/assets/awardbooks.png" />
    </div>
  );
}

export default Awards