import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const connectDatabse = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    console.log(`database connected ${connectDatabse.connection.host}`)
  } catch (error) {
    console.log("Database Error", error)
  }
};

export default connectDb