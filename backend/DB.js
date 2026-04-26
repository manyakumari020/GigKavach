const mongoose = require("mongoose");

const DataBase = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully ✅");
  } catch (err) {
    console.error("MongoDB connection error FULL ❌:", err);
  }
};

module.exports = DataBase;