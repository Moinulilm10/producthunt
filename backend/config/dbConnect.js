import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.DB_URI);
  // mongoose.connect(
  //   "mongodb+srv://moinul:surid100@cluster0.1pygp7z.mongodb.net/?retryWrites=true&w=majority"
  // );
};

export default dbConnect;
