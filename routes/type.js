const express = require("express");
const routes = express.Router();
const typeController = require("../controller/typeController");

routes.get("/addType", typeController.addType);
routes.post("/insertType", typeController.insertType);

routes.get("/viewTypes", typeController.viewTypes);

routes.get("/deactive/:id", typeController.deactive);
routes.get("/active/:id", typeController.active);

routes.get("/deleteData/:id" ,typeController.deleteData);

routes.get("/updateData/:id",typeController.updateData);
routes.post("/editType",typeController.editType);

module.exports = routes;