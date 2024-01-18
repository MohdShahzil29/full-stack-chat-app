const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Datebase connected ${mongoose.connection.host}`);
  } catch (error) {}
};

module.exports = connectDb;
