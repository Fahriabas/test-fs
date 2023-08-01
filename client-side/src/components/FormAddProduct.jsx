// import React from 'react';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, fetchCategories } from "../stores/actionCreator";
import { useNavigate } from "react-router-dom";

function FormAddProduct() {
    const dispatch = useDispatch()
    const forNavigate = useNavigate()

    const listCategory = useSelector((state) => state.allCategory)
    

    const [createForm, setCreateForm] = useState({
        name: "",
        sku: "",
        image: "",
        CategoryId: "",
        description: "",
        height: "",
        width: "",
        length: "",
        price: ""
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
        dispatch(createProduct(createForm))
        forNavigate("/products")
    }

    const inputCategory = listCategory.map(el => {
      return (
        <option key={el.id} value={el.id}>{el.name}</option>
      )
    })


    useEffect(() => {
      dispatch(fetchCategories())
    }, [dispatch])


  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="name"
              type="text"
              placeholder="name of product"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              SKU
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="sku"
              type="text"
              placeholder="SKU OF PRODUCT"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Image
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="image"
              type="text"
              placeholder="image url"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
            // defaultValue={'DEFAULT'}
              name="CategoryId"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="category"
              onChange={handleChange}
              required
            >
              {/* <option value="DEFAULT" disabled selected>
                -- Select Category --
              </option> */}
              <option value="">-- Select Category --</option>
              
              {/* Add more options as needed */}
              {inputCategory}
            </select>
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Description
            </label>
            <input
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="description"
              type="text"
              placeholder="Description of product"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Height
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              name="height"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Width
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="width"
              type="number"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              length
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="length"
              type="number"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="price"
              type="number"
              onChange={handleChange}
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

export default FormAddProduct;
