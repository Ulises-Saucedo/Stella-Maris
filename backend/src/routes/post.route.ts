import { Router } from "express";
import * as post from "../controllers/post.controller";
import * as schemas from "../schemas/post.schema";
import { validateSchema } from "../middlewares/validateSchema";
import { auth } from "../middlewares/auth";
import { uploadImageFile } from "../middlewares/multer";

const router: Router = Router();

router.get("/list", post.list);
router.get("/one/:postId", post.one);
router.post("/create", [auth, validateSchema(schemas.postSchema)], post.create);
router.put(
  "/update/:postId",
  [auth, validateSchema(schemas.updatedPostSchema)],
  post.update
);
router.delete("/remove/:postId", auth, post.remove);
router.post("/upload/:postId", [auth, uploadImageFile], post.upload);
router.get("/media/:file", post.show);

export default router;
