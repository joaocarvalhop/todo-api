import mongoose from "mongoose"
import 'dotenv/config'

const uri = `mongodb+srv://joaocarvalhop:${process.env.DB_PASSWORD || null}@cluster0.ikd5m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export default async function run() {
  mongoose.set("strictQuery", true)
  await mongoose.connect(uri)
  console.log("Conectado ao banco");
}