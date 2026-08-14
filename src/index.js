import { configDotenv } from "dotenv";
import connectDb from "./db/database.js";

configDotenv()

connectDb()