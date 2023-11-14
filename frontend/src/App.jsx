import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Addbooks from "./pages/Addbooks";
import Home from "./pages/Home";
import Allbooks from "./pages/Allbooks";
import Login from "./pages/Login";
import Updatebook from "./pages/Updatebook";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ReadMore from "./pages/ReadMore";
import axios from "axios";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Reading from "./pages/Reading";
import Contact from "./pages/Contact";
import H from "./pages/H";
import Books from "./pages/Books";
import Shop from "./pages/Shop";
import Admindashboard from "./Admindashboard";
import Managebooks from "./components/Managebooks";
import ShoppingCart from "./pages/ShoppingCart";
import AboutUs from "./components/AboutUs";
import Dashboard from "./components/Dashboard"

// import { AdminDashboard } from "./Admin/AdminDashboard";


axios.defaults.baseURL = "http://localhost:2000/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/header" element={<Header />} />
      <Route path="/addbooks" element={<Addbooks />} />
      <Route path="/update/:id" element={<Updatebook />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/books" element={<Allbooks />} />
      <Route path="/readmore/:bookId" element={<ReadMore />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/reading" element={<Reading />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/edit" element={<Books />} />
      <Route path="/shop" component={Shop} />
      <Route path="/" element={<H />} />
      <Route path="/h" element={<Admindashboard />} />
      <Route path="/manage" element={<Managebooks />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/dashbord" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
