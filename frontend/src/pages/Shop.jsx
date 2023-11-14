// Shop.js
import { useState, useEffect } from "react";
import axios from "axios";

function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books data from your API or source
    axios
      .get("http://localhost:2000/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="shop-page">
      <h1>Shop Books</h1>
      <div className="book-list">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <img src={book.image} alt={book.bookname} />
            <h2>{book.bookname}</h2>
            <p>{book.author}</p>
            <p>${book.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
