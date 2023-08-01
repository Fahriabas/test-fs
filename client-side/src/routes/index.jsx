import { createBrowserRouter, redirect } from "react-router-dom"
import Layout from "../components/Layout"
import DashboardView from "../components/DashboardView"
import ProductView from "../components/ProductView"
import LoginForm from "../components/LoginForm"
import RegisterForm from "../components/RegisterForm"
import FormAddProduct from "../components/FormAddProduct"
import FormEditProduct from "../components/FormEditProduct"
import CategoryView from "../components/CategoryView"
import FormAddCategory from "../components/FormAddCategory"





const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginForm/>,
        loader: () => {
            if (localStorage.getItem("access_token")) {
               throw redirect("/")  
            } 
            return null
          },
    },
    {
        element: <Layout/>,
        loader: () => {
            if (!localStorage.getItem("access_token")) {
               throw redirect("/login")  
            } 
            return null
          },
        children: [
            {
                path: "/",
                element: <DashboardView/>
            },
            {
                path: "/products",
                element: <ProductView/>
            },
            {
                path: "/categories",
                element: <CategoryView/>
            },
            {
                path: "/registers",
                element: <RegisterForm/>
            },
            {
                path: "/add",
                element: <FormAddProduct/>
            },
            {
                path: "/editProduct/:id",
                element: <FormEditProduct/>
            },
            {
                path: "/addCategories",
                element: <FormAddCategory/>
            },
        ]
    }
])

export default router