const express = require("express");
const path = require("path");

const app = express();

const htmlHome = path.join(__dirname, "../public");
const htmlAbout = path.join(__dirname, "../public/about.html");
const htmlHelp = path.join(__dirname, "../public/help.html");

// Setting up express urls

app.use(express.static(htmlHome));

// req and res has to be in this order for the path to work
app.get("/help", (req, res) => {
  res.sendFile(htmlHelp);
});

app.get("/about", (req, resp) => {
  resp.sendFile(htmlAbout);
});

app.get("/weather", (req, resp) => {
  resp.send({
    place: "New York City",
    temperature: "69F",
    climate: "Raining"
  });
});

// Setting up localhost port
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log("listening on port 3000...");
});
