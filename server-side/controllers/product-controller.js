const { Op } = require("sequelize");
const { User, Category, Product } = require("../models")


class ProductController {
   static async findProduct(req, res, next) {
      try {
        const count = parseInt(req.query.count) || 8;
        const page = parseInt(req.query.page) || 1;
        const searchQuery = req.query.q || ''; // Get the search query from the URL parameter 'q'
    
        const option = {
          include: {
            model: Category,
            attributes: ['name'],
          },
          limit: count,
          offset: (page - 1) * count,
          order: [['id', 'ASC']], 
        };
    
        if (searchQuery) {
          option.where = {
            name: {
              [Op.iLike]: `%${searchQuery}%`,
            },
          };
        }
    
        const products = await Product.findAll(option);    
        const totalData = await Product.count();
    
        const totalFilteredData = await Product.count({
          where: {
            name: {
              [Op.iLike]: `%${searchQuery}%`,
            },
          },
        });
    
        const totalPages = Math.ceil(totalFilteredData / count);
    
        res.status(200).json({
          statusCode: 200,
          products,
          currentPage: page,
          totalPages,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          statusCode: 500,
          message: 'Internal server error',
        });
      }
    }
      static async detailProduct(req, res, next) {
    try {

      const { id } = req.params

      const detailVehicle = await Product.findOne({
         where: { id },
         include: {
             model: Category,
             attributes: ['name']
         }
     });

      res.status(200).json({
         statusCode: 200,
         detailVehicle
      })

    } catch (error) {
      console.log(error);
    }
  }

  static async createProduct(req, res, next){
   try {
      const { name, sku, CategoryId, description, length, height, width, image, price, AuthorId } = req.body

      const { userId } = req.additionalData;
      const newProduct = await Product.create({
         name,
         sku,
         CategoryId,
         description,
         length,
         height,
         width,
         image,
         price,
         AuthorId: userId
      })

      res.status(201).json({
         statusCode: 201,
         message: "success create new product",
         newProduct
      })
   } catch (error) {
      console.log(error);
   }
  }

  static async editProduct(req, res, next){
   try {
      const { id } = req.params
      const { name, sku, CategoryId, description, length, height, width, image, price } = req.body

      const product = await Product.findOne()

      if(!product){
         throw { name : "ProductNotFound"}
      }

      const updatedProduct = await Product.update({
         name: name,
         sku: sku,
         CategoryId: CategoryId,
         description: description,
         length: length,
         height: height,
         width: width,
         image: image,
         price: price
      },{
         where: {
            id: id
         }
      })


     res.status(200).json({
      statusCode: 200,
      message: "successfully edit product"
     })


   } catch (error) {
      console.log(error);
   }
  }

  static async deleteProduct(req, res, next){
   try {
      const { id } = req.params

      const deletedProduct = await Product.findOne({where: {id: id}})

      if(!deletedProduct){
         throw { name: "DataNotFound"}
      }

      const removeProduct = await Product.destroy({where: {id: id}})

      res.status(200).json({
         statusCode: 200,
         message: "success delete product"
      })

   } catch (error) {
      console.log(error);
   }
  }


  
  static async listCategory(req, res, next) {
     try {



        let { page, pageSize } = req.query;
  
        //nilai defaultnya nih
        page = parseInt(page) || 1;

        pageSize = parseInt(pageSize) || 8;
  
        // Menghitung offset berdasarkan halaman dan ukuran halaman
        const offset = (page - 1) * pageSize;

        const option = {
           offset,
           limit: pageSize,
           order: [['id', 'ASC']] 
        };
  
        const categoryList = await Category.findAll(option);
  
        const totalData = await Category.count();
        const totalPages = Math.ceil(totalData / pageSize);
  
        res.status(200).json({
           statusCode: 200,
           categoryList,
           currentPage: page,
           pageSize: pageSize,
           totalPages: totalPages,
        });

     } catch (error) {
        console.log(error);
        next(error);
     }
  }
  

  static async readDashboard(req, res, next){
   try {
      const product = (await Product.findAll()).length
      const category = (await Category.findAll()).length

      res.status(200).json({
         statusCode: 200,
         message: {
            product: product,
            category:category
         }
      })
   } catch (error) {
      console.log(error);
   }
  }

  static async createCategory(req, res, next){
   try {
      const { name } = req.body

      const newCategory = await Category.create({name})

      res.status(200).json({
         statusCode: 200,
         message: 'success create new category',
         newCategory
      })

   } catch (error) {
      console.log(error);
   }
  }

  static async deleteCategory(req, res, next) {
   try {

      const { id } = req.params;

      const deletedCategory = await Category.destroy({ where: { id: id } });

      if (deletedCategory === 0) {
         throw { name: "NotFound" };
      }

      res.status(200).json({
         statusCode: 200,
         message: "success deleted category by id",
         deletedCategory: deletedCategory 
      });
   } catch (error) {
      next(error);
      console.log(error);
   }
 }

 static async getAllCategories(req, res, next){
   try {

      const categories = await Category.findAll()
      res.status(200).json({
         statusCode: 200,
         categories
      })

   } catch (error) {
      console.log(error);
   }
 }

  
}

module.exports = ProductController;
