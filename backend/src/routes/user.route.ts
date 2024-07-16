import { Router } from "express";
import * as user from "../controllers/user.controller";
import * as schemas from "../schemas/auth.schema";
import { validateSchema } from "../middlewares/validateSchema";
import { auth } from "../middlewares/auth";
import { verifySuperadminRole } from "../middlewares/verifySuperadmin";

const router: Router = Router();

router.post("/auth/login", validateSchema(schemas.loginSchema), user.login);
router.post(
  "/create",
  [auth, verifySuperadminRole, validateSchema(schemas.registerSchema)],
  user.signUp
);
router.put(
  "/update/:userId",
  [auth, verifySuperadminRole, validateSchema(schemas.updatedUserSchema)],
  user.updateAccount
);
router.delete(
  "/remove/:userId",
  [auth, verifySuperadminRole],
  user.deleteAccount
);
router.get("/verifyToken", auth, user.verify);

export default router;
