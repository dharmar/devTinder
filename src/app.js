const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  //create instance of new user model
  const user = new User(req.body);

  //   const user = new User({
  //     firstName: "Bhuvaneshwari",
  //     lastName: "Magesh Kumar",
  //     emailId: "bhuvan.dhar@gmail.com",
  //     password: "Booz@12$34",
  //   });
  await user.save();
  res.send("user added successfully");
});

connectDB()
  .then(() => {
    console.log("database connection established");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("database connection cannot be established");
  });
