const express = require("express");

const app = express();
app.get("/getUserData", (req, res) => {
  try {
    throw new Error("abcdef");
    res.send("user data sent successfully");
  } catch (err) {
    res.status(500).send("Some error. Contact support");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
