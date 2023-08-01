// const BASE_URL = "http://localhost:3000"
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const fetchPaginatedProducts = (page, searchQuery) => async (dispatch) => {
    try {
      const access_token = localStorage.getItem("access_token");
      let apiUrl = `http://localhost:3000/products?count=3&page=${page}`;
  
      if (searchQuery) {
        apiUrl += `&q=${searchQuery}`;
      }
  
      const response = await axios.get(apiUrl, {
        headers: {
          access_token: access_token,
        },
      });
      
      const { products, totalPages } = response.data;
      dispatch({
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: { products, currentPage: page, totalPages },
      });
    } catch (error) {
      dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
    }
  };
  
  

export const fetchPaginatedCategories = (page) => async (dispatch) => {
    try {
        const access_token = localStorage.getItem("access_token");
        const response = await axios.get(`http://localhost:3000/categories?pageSize=5&page=${page}`, {
            headers: {
                access_token: access_token
            }
        })
        const { categoryList, totalPages } = response.data;
        dispatch({type : 'FETCH_CATEGORY_SUCCESS', payload:{ categoryList, currentPage : page, totalPages}})
    } catch (error) {
        console.log(error);
    }
}




export const handleLogin = (payload) => async () => {
    try {
        const { data } = await axios.post("http://localhost:3000/login", payload)
        const { access_token } = data
        if(access_token){
            toast.success('Login Success! Welcome');
        }
        localStorage.setItem("access_token", access_token);
    } catch (err) {
        console.log(err);
        toast.error('Login fail! Cek again your email and password.');
    }
}

export const createProduct =  (createForm) => async (dispatch) =>{
    try {
        const access_token = localStorage.getItem("access_token");

        const { data } = await axios.post("http://localhost:3000/products/add", createForm, {
            headers: {
                access_token: access_token
            }
        })
        if(data.statusCode === 201){
            dispatch(fetchDashboard())
            toast.success('Success add new product');
        }
    } catch (error) {
        console.log(error);
    }
}


export const deleteProduct = (id) => async (dispatch) => {
    try {
        const access_token = localStorage.getItem("access_token");

        const { data } = await axios.delete(`http://localhost:3000/products/${id}`,{
            headers: {
                access_token: access_token
            }
        })
        if(data.statusCode === 200){
            dispatch(fetchPaginatedProducts(1))
            toast.success('delete product success');
        }
    } catch (error) {
        console.log(error);
    }
} 


export const fetchDetail = (id) => async (dispatch) => {
    try {
        const access_token = localStorage.getItem("access_token");

        const { data } = await axios.get(`http://localhost:3000/products/${id}`, {
            headers: {
                access_token: access_token
            }
        })
        const { detailVehicle } = data
        dispatch({type: 'FETCH_DETAIL_SUCCESS', payload : detailVehicle})
    } catch (error) {
        console.log(error);
    }
}

export const fetchCategories = () => async (dispatch) => {
    try {

        const access_token = localStorage.getItem("access_token");

        const { data } = await axios.get("http://localhost:3000/allCategories", {
            headers: {
                access_token: access_token
            }
        })
        const { categories } = data
        dispatch({type: 'FETCH_ALLCATEGORY_SUCCESS', payload: categories})
    } catch (error) {
        console.log(error);
    }
}

export const register = (registerForm) => async () => {
    try {
        const access_token = localStorage.getItem("access_token");

        const { data } = await axios.post("http://localhost:3000/register", registerForm, {
            headers: {
                access_token: access_token
            }
        } )
        if(data.statusCode === 201){
            toast.success("success register new user")
        }
    } catch (error) {
        console.log(error);
    }
}

export const fetchDashboard = () => async (dispatch) => {
    try {
        const access_token = localStorage.getItem("access_token");

        const { data } = await axios.get("http://localhost:3000/dashboard", {
            headers: {
                access_token: access_token
            }
        })
        const { message } = data
        dispatch({type: 'FETCH_DASHBOARD_SUCCESS', payload: message })
    } catch (error) {
        console.log(error);
    }
}

export const handleEditProduct = (editForm, id) => async (dispatch) => {
    try {
        const access_token = localStorage.getItem("access_token");

        const { data } = await axios.put(`http://localhost:3000/products/${id}`, editForm, {
            headers: {
                access_token: access_token
            }
        })
        if(data.statusCode === 200){
            dispatch(fetchPaginatedProducts(1))
            toast.success("edit success")
        }
    } catch (error) {
        console.log(error);
    }
}

export const createCategory = (createForm) => async () => {
    try {
        const access_token = localStorage.getItem("access_token");

        const { data } = await axios.post("http://localhost:3000/addCategories", createForm, {
            headers: {
                access_token: access_token
            }
        })
        if(data.statusCode === 201){
            toast.success("success create new category")
        }

    } catch (error) {
        console.log(error);
        toast.error("please check the input")
    }
}


export const handleDeleteCategory = (id) => async (dispatch) => {
    try {
        const access_token = localStorage.getItem("access_token");

        const { data } = await axios.delete(`http://localhost:3000/category/${id}`, {
            headers: {
                access_token: access_token
            }
        })
        if(data.statusCode === 200){
            dispatch(fetchPaginatedCategories(1))
        }
    } catch (error) {
        console.log(error);
    }
}