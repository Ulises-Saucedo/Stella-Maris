import User from "../src/models/user.model";
import { connectionToDatabase } from "../src/database/db";
import bcrypt from "bcrypt";

(async (): Promise<void> => {
  try {
    await connectionToDatabase();

    const user = new User({
      email: "johndoe@example.com",
      password: await bcrypt.hash("12345678", 10),
      role: "superadmin",
    });

    await user.save();

    console.log("Superusuario creado correctamente");
  } catch (e: any) {
    console.error(e);
  }
})();
