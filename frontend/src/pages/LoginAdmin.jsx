import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
function LoginAdmin() {

  
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  
    const handleChange = ({ currentTarget: input }) => {
      setData({ ...data, [input.name]: input.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const url = "http://localhost:2000/api/authAdmin";
        const { data: res } = await axios.post(url, data);
        localStorage.setItem("token", res.data)
        navigate("/dashbord")
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      }
    };

    return (
      <div className="sign-bg h-[100vh]">
        <Header />
        <div className="flex items-center justify-center mt-0 h-full ">
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-solid border-opacity-10 border-black w-[550px] p-[30px] shadow-md rounded-md m-[32px]"
            >
              <h3 className="text-xl uppercase text-center text-[#444]">
                sign in
              </h3>
              <span className="text-lg pt-4 block">Email</span>
              <input
                className="w-full my-2 text-lg border border-solid border-opacity-10 border-black rounded-lg p-3"
                type="email"
                autoComplete="off"
                placeholder="admin email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
              />
              <span className="text-lg pt-4 block">Password</span>
              <div className="relative">
              <input
                className="w-full my-2 text-lg border border-solid border-opacity-10 border-black rounded-lg p-3 pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="admin password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 text-2xl mt-3"
                onClick={handleTogglePassword}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>
              {error && (
                <div className="w-full text-white font-bold rounded-md bg-red-500 text-center py-1 mt-2">
                  {error}
                </div>
              )}
              
                <button
                  className="w-full text-white bg-blue-500 hover:bg-blue-600 py-3 rounded-lg cursor-pointer mt-3"
                >
                  Sign In
                </button>
             
              {/* <Link to={"/adminR"}>
                <p className="text-[18px] text-[#666] pt-2">
                  Dont have an account?
                  <span className="text-blue-500 underline cursor-pointer hover:text-blue-700">
                    Sign up here.
                  </span>
                </p>
              </Link> */}
            </form>
          </div>
        </div>
      </div>
    );
}

export default LoginAdmin
