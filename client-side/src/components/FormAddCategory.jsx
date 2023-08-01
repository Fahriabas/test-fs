import { useState } from "react"
import { useDispatch } from "react-redux"
import { createCategory } from "../stores/actionCreator"
import { useNavigate } from "react-router-dom"

function FormAddCategory() {


    const dispatch = useDispatch()

    const forNavigate = useNavigate()

    const [createForm, setCreateForm] = useState({
        name: ""
    })

    const handleChange = (event) => {
        const { value, name } = event.target

        setCreateForm({
            ...createForm,
            [name] : value
        })


    }


    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createCategory(createForm))
        forNavigate("/categories")
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="name"
              type="text"
              onChange={handleChange}
              placeholder="name of category"
              required
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormAddCategory;
