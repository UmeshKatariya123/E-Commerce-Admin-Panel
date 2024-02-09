const express = require("express");
const routes = express.Router();
const brandController = require("../controller/brandController");

routes.get("/addBrand", brandController.addBrand);
routes.post("/insertBrand", brandController.insertBrand);

routes.get("/viewBrands", brandController.viewBrands);

routes.get("/deactive/:id", brandController.deactive);
routes.get("/active/:id", brandController.active);

routes.get("/deleteData/:id" ,brandController.deleteData);

routes.get("/updateData/:id",brandController.updateData);
routes.post("/editBrand",brandController.editBrand);

routes.post("/getBrandAndType", brandController.getBrandAndType);

module.exports = routes;