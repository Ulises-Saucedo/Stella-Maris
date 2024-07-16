import { Request, Response, NextFunction } from "express";
import { uploadFile } from "../helpers/multer";

export const uploadImageFile = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  uploadFile(req, res, (e: any) => {
    if (e) {
      return res.status(400).json({ message: e.message });
    }

    next();
  });
};
