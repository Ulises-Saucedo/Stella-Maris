import "dotenv/config";
import express from "express";
import cors from "cors";
import { routes } from "./src/routes";
import { connectionToDatabase } from "./src/database/db";

(async (): Promise<void> => {
  await connectionToDatabase();
})();

const PORT: number = parseInt(process.env.PORT || "3000", 10);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", routes.user);
app.use("/api/post", routes.post);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
