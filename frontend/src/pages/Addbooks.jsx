import Header from "./Header";
import axios from "axios"
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Admindashboard from "../Admindashboard";

function Addbooks() {

  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [descriptionOne, setDescriptionOne] = useState("")
  const [descriptionTwo, setDescriptionTwo] = useState("")
  const [image , setImage] = useState([])

  const navigate = useNavigate();
const createBook = (event) => {
  event.preventDefault();
  axios
    .post("http://localhost:2000/create", {
      bookname: bookname,
      author: author,
      price: price,
      description: description,
      descriptionOne: descriptionOne,
      descriptionTwo: descriptionTwo,
      image: image,
    })
    .then(() => {
      toast("Add book successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        onClose: () => navigate("/books"),
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

  return (
    <div className="">
      <Header />
      <Admindashboard />
      <div className="w-[65%] rounded-md ml-[20%]  mt-24 bg-white shadow-2xl p-4">
      <h1 className="d text-3xl text-center font-bold pb-4">Add New Books</h1>
        <div className="space-y-4 flex flex-col">
          <input
            value={bookname}
            required
            name="bookname"
            autoComplete="off"
            onChange={(e) => {
              setBookname(e.target.value);
            }}
            type="text"
            placeholder="book name"
            className="p-1 rounded-sm bg-gray-50 border border-gray-300 text-gray-900 "
          />
          <input
            value={author}
            required
            autoComplete="off"
            name="author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            type="text"
            placeholder="Author"
            className="p-1 rounded-sm bg-gray-50 border border-gray-300 text-gray-900"
          />
          <input
            value={price}
            required
            autoComplete="off"
            name="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="text"
            placeholder="price "
            className="p-1 rounded-sm bg-gray-50 border border-gray-300 text-gray-900 "
          />
          <input
            value={image}
            required
            onChange={(e) => {
              setImage(e.target.value);
            }}
            type="text"
            placeholder="URL image"
            className="p-1 rounded-sm bg-gray-50 border border-gray-300 text-gray-900"
          />
          
          <textarea
            value={description}
            required
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows={2}
            placeholder="description"
            className="p-1 rounded-sm bg-gray-50 border border-gray-300 text-gray-900"
          />
           <textarea
            value={descriptionOne}
            required
            name="description"
            onChange={(e) => {
              setDescriptionOne(e.target.value);
            }}
            rows={2}
            placeholder="min description"
            className="p-1 rounded-sm bg-gray-50 border border-gray-300 text-gray-900"
          />
           <textarea
            value={descriptionTwo}
            required
            name="description"
            onChange={(e) => {
              setDescriptionTwo(e.target.value);
            }}
            rows={2}
            placeholder="max description"
            className="p-1 rounded-sm bg-gray-50 border border-gray-300 text-gray-900"
          />
          <button
            onClick={createBook}
            className="text-white w-full bg-teal-500 p-2 rounded-sm font-bold hover:bg-teal-700 transition-all"
          >
            Save
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Addbooks