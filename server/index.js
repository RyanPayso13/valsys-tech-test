const express = require("express");
const data = require("./DATA.json");

const app = express();

const port = 4000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) =>
  res.json({
    message:
      "Welcome to the Valsys Front End Tech test! Check the Documentation for available routes."
  })
);

app.get("/free-cash-flow", (req, res) => {
  return res.json(data.FCFF);
});

app.get("/summary", (req, res) => {
  return res.json(data.Summary);
});

app.listen(port, () => console.log(`App listening on port ${port}.`));
