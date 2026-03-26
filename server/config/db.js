import mongoose from "mongoose";
import dns from "node:dns/promises";

dns.setServers(["1.1.1.1"]);

const connectDB = async () => {

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("FULL ERROR:", error);
    process.exit(1);
  }
};

export default connectDB;