const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    process.env.MONGO_URI ||
      "mongodb+srv://abdallah121:abdallah121@healthcare.oqzoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
