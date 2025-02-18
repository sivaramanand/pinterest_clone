import mongoose from "mongoose";

export const connectDb = async () => {
  const url =
    "mongodb+srv://siva:jqGJe6oVdxEeVWZQ@cluster0.cvt78.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  try {
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("the error in mongodb", err);
  }
};
