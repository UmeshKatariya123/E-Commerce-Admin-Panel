const express = require("express");
const routes = express.Router();
const subCatController = require("../controller/subCatController");

routes.get("/addSubCategory", subCatController.addSubCategory);
routes.post("/insertSubCategory", subCatController.insertSubCategory);

routes.get("/viewSubCategories", subCatController.viewSubCategories);

routes.get("/deactive/:id", subCatController.deactive);
routes.get("/active/:id", subCatController.active);

routes.get("/deleteData/:id" ,subCatController.deleteData);

routes.get("/updateData/:id",subCatController.updateData);
routes.post("/editSubCategory",subCatController.editSubCategory);

routes.post("/getSubCatData",subCatController.getSubCatData);

module.exports = routes;