const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/eCommerce");

const db = mongoose.connection;

db.once('open',(err)=>{
    err ? console.log("DB not connected") : console.log("MongoDB Connected");
});

module.exports = db;