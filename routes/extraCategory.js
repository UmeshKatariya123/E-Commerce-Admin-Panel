const express = require("express");
const routes = express.Router();
const exCatController = require("../controller/exCatController");

routes.get("/addExCategory", exCatController.addExCategory);
routes.post("/insertExCategory", exCatController.insertExCategory);

routes.get("/viewExCategories", exCatController.viewExCategories);

routes.get("/deactive/:id", exCatController.deactive);
routes.get("/active/:id", exCatController.active);

routes.get("/deleteData/:id" ,exCatController.deleteData);

routes.get("/updateData/:id",exCatController.updateData);
routes.post("/editExCategory",exCatController.editExCategory);

routes.post("/getExCatData",exCatController.getExCatData);

module.exports = routes;