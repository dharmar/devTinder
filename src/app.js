const express = require("express");

const app = express();
app.use("/hello", (req, res) => {
  res.send("hello Hello Hello");
});

app.use("/test", (req, res) => {
  res.send("Hello from the express server");
});

app.use("/", (req, res) => {
  res.send("data from dashboard");
});

app.listen(3000, () => {
  console.log("Server i running on port 3000");
});
