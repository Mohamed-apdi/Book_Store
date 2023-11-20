const mongoose = require("mongoose")

const bookschema = mongoose.Schema({
  bookname: { type: String, required: true },
  description: { type: String, required: true },
  descriptionOne: { type: String, required: true },
  descriptionTwo: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("BookData", bookschema);