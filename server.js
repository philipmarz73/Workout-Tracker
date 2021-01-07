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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

//   adding test function to test mongoose connection
const connection = mongoose.connection;

connection.on("connected", () => {
    console.log("Mongoose connected successfully.");
});

connection.on("error", (err) => {
    console.log("Mongoose connection error: " + err);
})
// View Routes
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// API Routes
app.get("/api/config", (req,res) => {
    res.json({
        success: true,
    });
});

app.listen(PORT);
