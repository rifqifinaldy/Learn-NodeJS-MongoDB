const express = require("express");

// Express App
const app = express();

// register view engine
app.set("view engine", "ejs");

// Directory Name
const dirname = { root: __dirname };

// Listen for Request
app.listen(3000);

app.use((req, res, next) => {
  console.log("new request made :");
  console.log("host :", req.hostname);
  console.log("path :", req.path);
  console.log("method :", req.method);
  next();
});


app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Rifqi Belajar EJS",
      snippet: "LOREM IPSUM DOLOR",
    },
    {
      title: "Rifqi Belajar MongoDB",
      snippet: "DOLOR SIT AMET",
    },
    {
      title: "Rifqi",
      snippet: "AH",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a New Blog" });
});

// 404
app.use((req, res) => {
  res.status(404).render("404", { title: "404 Not Found" });
});
