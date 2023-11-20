import { useState, useEffect } from "react";
import Admindashboard from "../Admindashboard";
import Header from "../pages/Header";
import { GiBookPile } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdSell } from "react-icons/md";
const Dashboard = () => {
  const [userCount, setUserCount] = useState(null);
  const [bookCount, setBookCount] = useState(null);


useEffect(() => {
  // Fetch user count
  fetch("http://localhost:2000/api/auth/count")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => setUserCount(data.userCount))
    .catch((error) => console.error("Error fetching user count:", error));

  // Fetch book count
  fetch("http://localhost:2000/count/books")
    .then((response) => response.json())
    .then((data) => setBookCount(data.bookCount))
    .catch((error) => console.error("Error fetching book count:", error));
}, []);


  return (
    <div className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 mt-14 h-[100vh] p-8 rounded-lg ml-[15%] ">
        <Header />
      <Admindashboard />
      <div>
        <h1 className=" text-2xl text-white font-medium">Hi,Wellcome Back.</h1>
      <h1 className="d text-3xl text-center font-bold pb-4 mb-10 text-white font">My Dashboard</h1>
      </div>
      <div className="flex justify-around">
      <div className="  bg-gradient-to-r from-sky-400 to-blue-500 w-52 h-36 rounded-md  justify-center items-center text-white font-bold text-4xl flex flex-col"><p><GiBookPile className=" text-black text-5xl" /></p> {bookCount !== null ? bookCount : "Loading..."}+ <h1 className=" text-2xl">Book's</h1></div>
        <div className=" bg-gradient-to-r from-emerald-500 to-lime-600 to-90% w-52 h-36 rounded-md  justify-center items-center text-white font-bold text-4xl flex flex-col"><p><FaUser className=" text-black text-4xl" /></p> {userCount !== null ? userCount : "7"}+ <h1 className=" text-2xl">User's</h1></div>
        <div className=" bg-gradient-to-r from-orange-400 to-rose-400 w-52 h-36 rounded-md justify-center items-center text-white font-bold text-4xl flex flex-col"> <MdSell className=" text-black text-5xl" /> {userCount !== null ? userCount : "11"}+ <h1 className=" text-2xl">Book's sold</h1></div>
      </div>

    </div>
  );
};

export default Dashboard;
