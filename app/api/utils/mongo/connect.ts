import { MongoClient } from "mongodb";
import { env } from "@/app/env";

// const uri = process.env.MONGODB_URI as string;
const uri = `mongodb+srv://vercel-admin-user:${env.databasePassword}@cluster0.hzgligq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

let client;
let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your Mongo URI to .env.local');
// }

// In production mode, it's best to not use a global variable.
client = new MongoClient(uri);
clientPromise = client.connect();

export default clientPromise as any;
