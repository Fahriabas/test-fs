import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../stores/actionCreator";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const forNavigate = useNavigate()
  const dispatch = useDispatch()


  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(register(registerForm))
    forNavigate("/")
  }
  


  const handleChange = (event) => {
    const { value, name } = event.target


    setRegisterForm({
      ...registerForm,
      [name] : value
    })
  }

    return (
        <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              username
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              name="username"
              onChange={handleChange}
              placeholder="username"
              required
            />

          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="email"
              onChange={handleChange}
              placeholder="email"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="******************"
              required
            />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you`d like</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    );
  }
  
  export default RegisterForm;
  