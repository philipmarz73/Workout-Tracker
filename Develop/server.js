// 1.Require Express
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// 2. Create an instance of Express
const app = express();
// 3. Set the Port
const PORT = process.env.PORT || 8080;
// Add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// connect to MongoDB with mongoose
mongoose.connect(process.env.MONGODB_URI || )

// View Routes
app.get("/", (req,res) => {
    res.sendFile(path.join(_dirname, "/views/index.html"));
});

// API Routes
app.get("/api/config", (req,res) => {
    res.json({
        success: true,
    });
});