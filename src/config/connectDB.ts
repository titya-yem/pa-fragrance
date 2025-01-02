import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully.");
    });
  } catch (error) {
    console.log("Something went wrong!");
    console.log(error);
  }
};

export default connectDB;
