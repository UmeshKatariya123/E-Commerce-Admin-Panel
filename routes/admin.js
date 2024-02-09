const express = require("express");
const routes = express.Router();
const adminController = require("../controller/adminController");
const Admin = require("../model/Admin");
const passport = require("passport");

routes.get("/", async (req,res) => {
    return res.render("login");
})
routes.post("/login", passport.authenticate('local',{failureRedirect : "/admin"}) ,adminController.login);

// Logout
routes.get("/logout", adminController.logout);

// Dashboard
routes.get("/dashboard", passport.checkAuth ,adminController.dashboard);

// Add Admin
routes.get("/addAdmin",passport.checkAuth ,adminController.addAdmin);

// Insert Admin
routes.post("/insertAdmin",passport.checkAuth ,Admin.uploadAdminImage,adminController.insertAdmin)

// View Admin
routes.get("/viewAdminData",passport.checkAuth ,adminController.viewAdminData);

// Active ---- Deactive 
routes.get("/deactive/:id", adminController.deactive);
routes.get("/active/:id", adminController.active);

// Delete Data
routes.get("/deleteData/:id", passport.checkAuth ,adminController.deleteData);

// Edit Password
routes.post("/editPassword", adminController.editPassword);

// Profile
routes.get("/profile",passport.checkAuth , adminController.profile);

// Updata Profile
routes.post("/updateProfile",Admin.uploadAdminImage,adminController.updateProfile);

// Update Data ---- Edit Admin Data
routes.get("/updateData/:id",adminController.updateData);
routes.post("/editAdminData",Admin.uploadAdminImage,adminController.editAdminData);

// Email
routes.get("/emailPage", async (req,res) => {
    return res.render("ForgotPass/emailPage");
});

// Check Email
routes.post("/checkEmail", adminController.checkEmail);

// OTP
routes.get("/otpPage", async (req,res) => {
    return res.render("ForgotPass/otpPage")
})

// Check OTP
routes.post("/checkOTP", adminController.checkOTP);

// Change ForgetPass ---- Edit ForgetPass
routes.get("/changeForgetPass",adminController.changeForgetPass);
routes.post("/editForgetPass",adminController.editForgetPass);

//Category
routes.use("/category",passport.checkAuth ,require("./category"));

// Sub Category
routes.use("/subCategory",passport.checkAuth ,require("./subCategory"));

// Extra Category
routes.use("/extraCategory",passport.checkAuth ,require("./extraCategory"));

// Brand
routes.use("/brand",passport.checkAuth ,require("./brand"));

// Type
routes.use("/type",passport.checkAuth ,require("./type"));

// Product
routes.use("/product",passport.checkAuth ,require("./product"));

module.exports = routes;