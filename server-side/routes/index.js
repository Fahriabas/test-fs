const express = require('express')
const UserController = require('../controllers/user-controller')
const ProductController = require('../controllers/product-controller')
const authentication = require('../middlewares/authentication')
const Router = express.Router()



//routing to user
Router.post("/login", UserController.login) //login user
Router.post("/register", UserController.register)//register new user


//routing for product
Router.get("/products",authentication, ProductController.findProduct) //dapatin semua product
Router.get("/products/:id",authentication, ProductController.detailProduct) //dapatin detail dari product
Router.post("/products/add",authentication, ProductController.createProduct) ////membuat product baru
Router.put("/products/:id",authentication, ProductController.editProduct) //edit satu product
Router.delete("/products/:id",authentication, ProductController.deleteProduct) //menghapus product dari daftar product
Router.get("/categories",authentication, ProductController.listCategory) //read all category
Router.get("/dashboard",authentication, ProductController.readDashboard) //routingan untuk mendapatkan totalproduct dan total category
Router.post("/addCategories",authentication, ProductController.createCategory) // untuk menambahkan kategori baru
Router.delete("/category/:id",authentication, ProductController.deleteCategory) // delete category by id
Router.get("/allCategories",authentication, ProductController.getAllCategories) //untuk mendapatkan data khusus category yang dimap untuk option

module.exports = Router