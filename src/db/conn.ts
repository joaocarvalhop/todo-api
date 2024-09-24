import mongoose from "mongoose"
import 'dotenv/config'

const uri: string = process.env.DB_URI || " "

export default async function run() {
  mongoose.set("strictQuery", true)
  await mongoose.connect(uri)
  console.log("Conectado ao banco");
}