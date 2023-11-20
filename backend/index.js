const express = require("express");
const mongoose = require("mongoose")
const bookModel = require("./model/bookModel");
const cors = require("cors")
const app = express();
const userRoutes = require("./routes/users");
const userAdminRoutes = require("./routes/userAdmin");
const authRoutes = require("./routes/auth")
const authAdminRoutes = require("./routes/authAdmin")
const nodemailer = require("nodemailer");
const router = require("express").Router();
const bodyParser = require("body-parser");
//  up requires
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your React app's URL
  credentials: true, // Allow credentials (cookies, authorization headers)
};

app.use(express.json())
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Gmail SMTP configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "maxamedcabdifitaax33@gmail.com", // Your Gmail email address
    pass: "nukd qtxj znnh wwqw", // Your Gmail password or an app-specific password
  },
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Received contact form submission:", { name, email, message });

    const mailOptions = {
      from: "your@gmail.com",
      to: "recipient@example.com", // Recipient email address
      subject: "Contact Form Submission",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// db connections
mongoose
  .connect("mongodb://0.0.0.0:27017/BookStore")
  .then(() => {
    console.log("Database is ok");
  })
  .catch((error) => {
    console.log(error);
  });



// Routes
app.use("/api/users", userRoutes);
app.use("/api/useradmin", userAdminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/authAdmin", authAdminRoutes);


// create post
app.post("/create", async (req, res) => {
  const newBook = bookModel(req.body)
  const saveBook = await newBook.save()
  res.send(saveBook)
})

// get data

app.get("/book", async (req, res) => {
  const getBooks = await bookModel.find()
  res.send(getBooks)
})

// GET DATA ID
app.get("/books/single/:id", async (req, res) => {
  const getOne = await bookModel.findById({
    _id: req.params.id,
  });
  res.send(getOne)
});

// GET DATA ID
app.get("/book/:id", async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// update data
app.put("/update/single/:id", async (req, res) => {
  const updateData = await bookModel.updateOne(
    { _id: req.params.id },
    {$set: req.body}
  )
  res.send(updateData)
})

// delete data

app.delete("/delete/:id", async (req, res) => {
  const deleteData = await bookModel.deleteOne({
    _id: req.params.id
  })
  res.send(deleteData)

})

// Search for books by title or author
app.get("/search", async (req, res) => {
  const searchTerm = req.query.q; // Get the search term from the query parameter

  try {
    const searchResults = await bookModel.find({
      $or: [
        { bookname: { $regex: searchTerm, $options: "i" } }, // Case-insensitive search in the title
        { author: { $regex: searchTerm, $options: "i" } }, // Case-insensitive search in the author
      ],
    });

    res.json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
// Add this route to count users

// 
router.get("/count", async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    res.status(200).json({ userCount });
  } catch (error) {
    console.error("User count error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
// Add this route to count books
app.get("/count/books", async (req, res) => {
  try {
    const bookCount = await bookModel.countDocuments();
    res.json({ bookCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(2000, () => {
  console.log("server is ok");
});
