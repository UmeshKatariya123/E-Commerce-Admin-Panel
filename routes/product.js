const express = require("express");
const routes = express.Router();
const Product = require("../model/Product");
const productController = require("../controller/productController");

routes.get("/addProduct", productController.addProduct);
routes.post("/insertProduct", Product.uploadProductImage ,productController.insertProduct)

routes.get("/viewProducts", productController.viewProducts);

routes.get("/deactive/:id", productController.deactive);
routes.get("/active/:id", productController.active);

routes.get("/deleteData/:id" ,productController.deleteData);

routes.get("/updateData/:id",productController.updateData);
routes.post("/editProduct",Product.uploadProductImage,productController.editProduct);

routes.post("/deleteMultiImages",productController.deleteMultiImages)

module.exports = routes;