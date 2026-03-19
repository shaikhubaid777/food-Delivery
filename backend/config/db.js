import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect( process.env.MONGO_URL || "mongodb://localhost:27017/Food_Delivery")
  console.log("DB Connected");
};
