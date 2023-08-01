import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleLogin } from "../stores/actionCreator";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  
    const dispatch = useDispatch()
    const forNavigate = useNavigate()
    const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      await dispatch(handleLogin(loginForm));
      forNavigate("/")
    } catch (error) {
      console.log("Error while logging in:", error);
    }

  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignIn}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                loginForm.password === "" ? "border-red-500" : ""
              }`}
              id="password"
              type="password"
              placeholder="******************"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
            />
            {loginForm.password === "" && (
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
     
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
