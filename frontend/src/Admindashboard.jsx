import { BiSolidDashboard } from "react-icons/bi"
import { IoMdListBox } from "react-icons/io"
import {CiWarning} from "react-icons/ci"
import Header from "./pages/Header";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Admindashboard = () => {
  return (
    <div className="absolute top-10 bottom-0 left-0 font-poppins shadow-2xl p-5 w-48 rounded-md bg-white">
      <Header />
      <div>
        <h1 className="text-3xl font-bold ">Dashbord</h1>
      </div>
      <div className="flex flex-col space-y-4  pt-10">
        <NavLink to={"/dashbord"}>
        <p className="text-sm font-medium border-b-2 text-gray-700 py-2 px-2 hover:bg-gradient-to-r from-blue-400 to-emerald-400 hover:text-white  rounded-md transition duration-150 ease-in-out">
          <BiSolidDashboard className="w-6 h-6 fill-current inline-block" />{" "}
          Dashboard
        </p>
        </NavLink>
        <NavLink to={"/manage"}>
          <p className="text-sm font-medium border-b-2 text-gray-700 py-2 px-2 hover:bg-gradient-to-r from-blue-400 to-emerald-400 hover:text-white  rounded-md transition duration-150 ease-in-out">
            <IoMdListBox className="w-6 h-6 fill-current inline-block" /> Manage
            Books
          </p>
        </NavLink>
        <NavLink to={"/addbooks"}>
          <p className="text-sm font-medium border-b-2 text-gray-700 py-2 px-2 hover:bg-gradient-to-r from-blue-400 to-emerald-400 hover:text-white  rounded-md transition duration-150 ease-in-out">
            <BiSolidDashboard className="w-6 h-6 fill-current inline-block" />{" "}
            Add New Book
          </p>
        </NavLink>
        <NavLink to={"/aboutus"}>
          <p className="text-sm font-medium border-b-2 text-gray-700 py-2 px-2 hover:bg-gradient-to-r from-blue-400 to-emerald-400 hover:text-white  rounded-md transition duration-150 ease-in-out">
            <CiWarning className="w-6 h-6 fill-current inline-block" /> About
          </p>
        </NavLink>
      </div>
    </div>
  );
}



export default Admindashboard