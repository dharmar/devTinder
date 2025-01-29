const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shya1234:dsvb1234@cluster0.8d7hj.mongodb.net/devTinder"
  );
};

module.exports = { connectDB };
