const express = require("express");

const app = express();

// Setting up express urls
// req and res has to be in this order for the path to work
app.get("", (req, res) => {
  res.send("Hello from express");
});

app.get("/about", (req, resp) => {
  resp.send("Welcome to the about page!");
});

app.get("/about", (req, resp) => {
  resp.send("Welcome to the about page!");
});

app.get("/weather", (req, resp) => {
  resp.send("Weather Page!");
});

// Setting up localhost port
app.listen(3000, () => {
  console.log("listening on port 3000...");
});
