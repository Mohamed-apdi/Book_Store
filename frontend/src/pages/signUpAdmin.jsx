import Header from "./Header";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { useState} from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
function SignUpAdmin() {

  const [data, setData] = useState({
    name: "",
    email: "",
    password:""
  })
  
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:2000/api/useradmin";
      const { data: res } = await axios.post(url, data);
      navigate("/adminL");
      console.log(res.message);
    } catch (error) {
      if (error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message)
      }
    }
  }

  return (
    <div className="sign-bg h-[100vh]">
      <Header />
      <div className="flex items-center justify-center h-full">
        <div>
          <form onSubmit={handleSubmit} className="bg-white border border-solid border-opacity-10 border-black w-[550px] p-[30px] shadow-md rounded-md m-[32px]">
            <h3 className="text-xl uppercase text-center text-[#444]">
              Sign Up
            </h3>
            <label className="text-lg pt-4 block">Name</label>
            <input
              className="w-full my-2 text-lg border border-solid border-opacity-10 border-black rounded-lg p-3"
              type="text"
              placeholder="admin name"
              autoComplete="off"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
            />
            <span className="text-lg pt-4 block">Email</span>
            <input
              className="w-full my-2 text-lg border border-solid border-opacity-10 border-black rounded-lg p-3"
              type="email"
              placeholder="admin email"
              autoComplete="off"
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
            {error && <div className="w-full text-white bg-red-500 text-center py-3 rounded-lg cursor-pointer mt-3">{error}</div>}
            <button type="submit" onSubmit={handleSubmit} className="w-full text-white bg-blue-500 hover:bg-blue-600 py-3 rounded-lg cursor-pointer mt-3">
              Sign Up
            </button>
           
            <Link to={"/login"}>
              <p className="text-[18px] text-[#666] pt-2 transition-all">
                Already have an account?
                <span className="text-blue-500 underline cursor-pointer hover:text-blue-700">
                  Sign in here.
                </span>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpAdmin;
