import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  try {
    if (!process.env.MONGODB_URI) {
      console.error("❌ MONGODB_URI is missing");
      return null;
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn.connection;
  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    if (/bad auth|authentication failed/i.test(error.message)) {
      console.error(
        "ℹ️ Atlas auth failed: verify DB username/password in .env and ensure the DB user has readWrite/admin permissions.",
      );
    }
    if (/querySrv|ENOTFOUND|ECONNREFUSED/i.test(error.message)) {
      console.error(
        "ℹ️ DNS/SRV lookup failed: use a non-SRV mongodb:// URI or switch DNS to 8.8.8.8 / 1.1.1.1.",
      );
    }
    return null;
  }
};

export default connectDB;
