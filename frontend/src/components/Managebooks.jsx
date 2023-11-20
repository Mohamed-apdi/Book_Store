import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Admindashboard from "../Admindashboard";
import Header from "../pages/Header";

const Managebooks = () => {
  const [Data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:2000/book")
        .then((res) => setData(res.data));
    };
    fetch();
  });

  const delateBook = (id) => {
    axios
      .delete(`http://localhost:2000/delete/${id}`)
      .then(() => {
        toast("delete  successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
        });
        Managebooks();
      })
      .catch((eror) => {
        console.log(eror);
      });
  };

  const maxPage = Math.ceil(Data.length / booksPerPage);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = Data.slice(indexOfFirstBook, indexOfLastBook);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > maxPage) {
      return;
    }
    setCurrentPage(newPage);
  };

  return (
    <div className=" h-[100vh]">
      <Header />
      <Admindashboard />
      <div className="ml-[15%] mr-14  mt-[85px] ">
        <h1 className="d text-3xl text-center font-bold pb-4">Manage Books</h1>

        <table className="w-full text-center">
          <tr>
            <th className="p-2 bg-teal-300 rounded-sm">
              <td>No.</td>
              <td>BookName</td>
              <td>Author</td>
              <td>Price</td>
              <td>Edit or Manage</td>
            </th>
          </tr>

          {currentBooks.map((item, index) => (
            <tr
              key={item._id}
              className="border-b border-l border-r dark:bg-white dark:border-gray-200"
            >
              <tbody>
                <td className="py-2">{index + 1}</td>
                <td className="w-[700px]">{item.bookname}</td>
                <td>{item.author}</td>
                <td>${item.price}</td>
                <td>
                  <Link
                    className="d text-sky-700 hover:underline pr-6"
                    to={`/update/${item._id}`}
                  >
                    edit
                  </Link>

                  <button
                    className="bg-red-500 text-white px-2 rounded-sm"
                    onClick={() => delateBook(item._id)}
                  >
                    delate
                  </button>
                </td>
              </tbody>
            </tr>
          ))}
        </table>
        <div className="flex justify-center items-center pb-2">
          <button
            className=" bg-cyan-950  text-white px-6 mt-2  rounded-md mr-2 cursor-pointer hover:shadow-md"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
            className=" bg-cyan-950  text-white mt-2 rounded-md px-6 cursor-pointer hover:shadow-md"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === maxPage}
          >
            Next
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Managebooks;
