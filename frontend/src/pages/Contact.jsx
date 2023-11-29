import { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Form data:", formData);
      await axios.post("http://localhost:2000/api/contact", formData);
      alert("Email sent successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email. Please try again later.");
    }
  };
  
  return (
    <div>
      <Header />
      <div className="bg-slate-300 p-8 rounded-lg shadow-md mt-10 mb-20 ">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Contact Us
        </h2>
        <div className="text-gray-700 leading-loose">
          <p>
            Have questions or feedback? Feel free to get in touch with us using
            the contact form below or through the provided contact information.
          </p>
        </div>
        <form className="mt-6 w-[600px]" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
