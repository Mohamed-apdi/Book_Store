import Footer from "./Footer";
import Header from "./Header";

function About() {
  return (
    <div>
      <Header/>
      <div className="bg-white p-8 rounded-lg shadow-md mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          About BookStore
        </h2>
        <div className="flex space-x-6">
          <div className="w-1/2">
            <img
              src="https://i.pinimg.com/564x/a8/e6/55/a8e655c608f3c91cc568b5559feac612.jpg" // Replace with the actual image URL
              alt="BookStore™"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-1/2">
            <p className="text-gray-700 leading-loose">
              Welcome to BookStore, your literary oasis. Our mission is to
              provide book lovers with a diverse collection of books, from
              timeless classics to contemporary bestsellers. With a commitment
              to quality and a love for reading, we offer a curated selection
              that caters to all tastes and preferences.
            </p>
            <p className="text-gray-700 leading-loose mt-4">
              Whether you are a seasoned reader or just starting your reading
              journey, BookStore™ is here to help you discover your next
              favorite book. Explore our extensive catalog, immerse yourself in
              captivating stories, and embark on literary adventures with us.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
