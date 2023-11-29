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
  const [descriptionOne, setDescriptionOne] = useState("")
  const [descriptionTwo, setDescriptionTwo] = useState("")
  const [image, setImage] = useState([]);

  const navigate = useNavigate();
    const params = useParams();

  const getSingleData = () => {
    axios.get(`http://localhost:2000/books/single/${params.id}`).then((response) => {
            setBookname(response.data.bookname);
            setAuthor(response.data.author);
            setPrice(response.data.price);
            setDescription(response.data.description);
            setDescriptionOne(response.data.descriptionOne);
            setDescriptionTwo(response.data.descriptionTwo);
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
            "descriptionOne": descriptionOne,
            "descriptionTwo": descriptionTwo,
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
    <div className=" h-screen">
      <Header />
      <div className="w-[500px] mx-auto">
        <div className="space-y-4 flex flex-col mt-24 bg-yellow-700 p-4 rounded">
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

          <textarea
            value={descriptionOne}
            name="descriptionOne"
            onChange={(e) => {
              setDescriptionOne(e.target.value);
            }}
            rows={5}
            placeholder="description min"
            className="p-1 rounded-sm"
          />

          <textarea
            value={descriptionTwo}
            name="descriptionTwo"
            onChange={(e) => {
              setDescriptionTwo(e.target.value);
            }}
            rows={5}
            placeholder="description max"
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
