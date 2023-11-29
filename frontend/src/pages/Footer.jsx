import {Link} from "react-router-dom"
function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-around items-center">
        <Link to={"/"}>
          <h2 className="text-2xl font-semibold mb-2">BookStore</h2>
        </Link>
        <div className="flex space-x-4">
          <Link to={"/about"}>
            <a href="#" className="hover:underline">
              About
            </a>
          </Link>
          <Link to={"/privacy"}>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </Link>
          <Link to={"/reading"}>
            <a href="#" className="hover:underline">
              Reading
            </a>
          </Link>
          <Link to={"/contact"}>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}


export default Footer