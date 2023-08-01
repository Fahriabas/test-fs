// import React from 'react';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchDetail, handleEditProduct } from "../stores/actionCreator";
import { useNavigate, useParams } from "react-router-dom";


function FormEditProduct() {


    const { id } = useParams()

    const detail = useSelector((state) => state.detailProduct)
    console.log(detail, 'line 15');

    const listCategory = useSelector((state) => state.allCategory)
    console.log(listCategory, 'line 17');

    const dispatch = useDispatch()

    const forNavigate = useNavigate()

    const [editForm, setEditForm] = useState({
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
        const { value, name } = event.target;
        setEditForm({ ...editForm, [name]: value }); // Use value instead of name
      };

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(handleEditProduct(editForm, id))
        forNavigate("/products")
    }

    const inputCategory = listCategory.map(el => {
      return (
        <option key={el.id} value={el.id}>{el.name}</option>
      )
    })


    useEffect(() => {
        dispatch(fetchDetail(id))
        dispatch(fetchCategories())
    }, [dispatch, id])


    useEffect(() => {
        setEditForm({
            name: detail.name || "",
            sku: detail.sku || "",
            image: detail.image || "",
            CategoryId: detail.CategoryId || "",
            description: detail.description || "",
            height: detail.height || "",
            width: detail.width || "",
            length: detail.length || "",
            price: detail.price || ""
        })
    }, [detail])


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
              value={editForm.name}
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
              value={editForm.sku}
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
              value={editForm.image}
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
              value={editForm.CategoryId}
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
              value={editForm.description}
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
              value={editForm.height}
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
              value={editForm.width}
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
              value={editForm.length}
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
              value={editForm.price}
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormEditProduct;
