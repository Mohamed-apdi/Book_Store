import Header from "./Header";
import { Link } from "react-router-dom";
function ForgotPassword() {
 
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center mt-16 h-full">
        <div>
          <form
            className="bg-white border border-solid border-opacity-10 border-black w-[550px] p-[30px] shadow-md rounded-md m-[32px]"
          >
            <h3 className="text-xl uppercase text-center text-[#444]">
              Forgot Password
            </h3>
            <span className="text-lg pt-4 block">Email</span>
            <input
              className="w-full my-2 text-lg border border-solid border-opacity-10 border-black rounded-lg p-3"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button className="w-full text-white bg-blue-500 hover:bg-blue-600 py-3 rounded-lg cursor-pointer mt-3">
              Reset Password
            </button>
            <Link to={"/login"}>
              <p className="text-[18px] text-[#666] pt-6">
                <span className="text-blue-500 underline cursor-pointer hover:text-blue-700">
                  {" "}
                  Back to Sign In
                </span>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
