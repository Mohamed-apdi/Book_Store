
// import Allbooks from "./Allbooks"
import { Link } from "react-router-dom"
import Awards from "./Awards"
import Books from "./Books"
import Content from "./Content"
import Customers from "./Customers"
import Footer from "./Footer"
// import Books from "./Books"
import Header from "./Header"
import Home from "./Home"
import { FaArrowAltCircleUp } from "react-icons/fa";
function H() {
  const handleScrollToTop = () => {
    // Logic to scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // You can change this to 'auto' for an instant scroll
    });
  };
  return (
    <div>
      <Header />
      <Home />
      <Books />
      <Content />
      <Awards />
      <Customers />
      <Link to={""}>
      <FaArrowAltCircleUp onClick={handleScrollToTop} className=" absolute right-4 -bottom-[1730px] text-4xl animate-bounce cursor-pointer" />
      </Link>
      <Footer/>
    </div>
  );
}

export default H