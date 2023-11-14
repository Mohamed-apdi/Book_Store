import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Updatebook() {
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  const navigate = useNavigate();
    const params = useParams();

  const getSingleData = () => {
    axios.get(`http://localhost:2000/books/single/${params.id}`).then((response) => {
            setBookname(response.data.bookname);
            setAuthor(response.data.author);
            setPrice(response.data.price);
            setDescription(response.data.description);
            setImage(response.data.image);
      }).catch((console.error()))
  }
  
  useEffect(() => {
    getSingleData()
  },[])

    const update = (event) => {
        event.preventDefault()

        axios
          .put(`http://localhost:2000/update/single/${params.id}`, {
            "bookname": bookname,
            "description": description,
            "author": author,
            "image": image,
            "price":price
          }).then(() => {
            alert("Update book successfully")
              navigate("/manage");
          }).catch((err) => {
            console.log(err)
          })
    }
  return (
    <div className="bg-blue-500 h-screen">
      <Header />
      <div className="w-[500px] mx-auto mt-24">
        <div className="space-y-4 flex flex-col">
          <input
            value={bookname}
            name="bookname"
            onChange={(e) => {
              setBookname(e.target.value);
            }}
            type="text"
            placeholder="book name"
            className="p-1 rounded-sm"
          />
          <input
            value={author}
            name="author"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            type="text"
            placeholder="Author"
            className="p-1 rounded-sm"
          />
          <input
            value={price}
            name="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="text"
            placeholder="price "
            className="p-1 rounded-sm "
          />
          <input
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            type="text"
            placeholder="URL image"
            className="p-1 rounded-sm"
          />
          <textarea
            value={description}
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows={5}
            placeholder="description"
            className="p-1 rounded-sm"
          />
          <button
            onClick={update}
            className="text-white w-full bg-amber-500 p-2 rounded-sm font-bold hover:bg-amber-600 transition-all"
          >
           update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Updatebook;
