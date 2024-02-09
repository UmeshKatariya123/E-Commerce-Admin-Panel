const express = require("express");
const routes = express.Router();
const categoryController = require("../controller/categoryController");

routes.get("/addCategory",categoryController.addCategory);
routes.post("/insertCategory",categoryController.insertCategory);

routes.get("/viewCategories",categoryController.viewCategories);

routes.get("/deactive/:id", categoryController.deactive);
routes.get("/active/:id", categoryController.active);

routes.get("/deleteData/:id" ,categoryController.deleteData);

routes.get("/updateData/:id",categoryController.updateData);
routes.post("/editCategory",categoryController.editCategory);

module.exports = routes;