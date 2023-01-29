import { MongoClient } from "mongodb";
import mongoose, { Mongoose } from "mongoose";

let uri = process.env.MONGODB_URI;
let db: Mongoose;
async function connectToDatabase() {
  if (!db) {
    db = await mongoose.connect(uri);
  }
}

export { db, connectToDatabase };
