import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/stella_maris";

export async function connectionToDatabase(): Promise<void> {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error("Error al conectarse a la base de datos: ", error);
  }
}
