import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      {/* Custom-navbar */}
      <div className="flex items-center justify-between px-6 text-xl md:px-[200px] py-4 ">
        <h1 className="text-3xl text-black ">
          <Link to="/">Blog Marcket</Link>
        </h1>
        <div className="flex items-center justify-center space-x-2 md:space-x-4">
          <h3 className="text-black">
            <Link to="/register">Register</Link>
          </h3>
        </div>
      </div>

      <div className="w-full  flex justify-center items-center h-[80vh]">
        <div className="w-[80%] flex flex-col space-y-4 md:w-[25%] justify-center items-center border-2 border-black p-8">
          <h1 className=" text-xl font-bold text-left">
            Login into your account.
          </h1>
          <br />
          <input
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="text"
            placeholder="Enter your email"
          />
          <input
            className="w-full  px-4 py-2 border-2 border-black outline-0"
            type="password"
            placeholder="Enter your password"
          />
          <button className="w-full font-bold text-white bg-black p-2 rounded-lg hover:bg-green-300   hover:text-black hover:border-2 hover:border-black  ">
            Login
          </button>
          <div className=" flex justify-center items-center space-x-3 text-right">
            <p>Don't have an account?</p>
            <p className="text-gray-500 hover:text-green-400">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
