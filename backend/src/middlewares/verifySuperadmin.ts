import { Response, NextFunction } from "express";
import { AuthRequest } from "../ts/interfaces/auth.interfaces";

export const verifySuperadminRole = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;

  if (user?.role === "superadmin") {
    next();
  } else {
    return res
      .status(403)
      .json({
        status: 403,
        message: "No estas autorizado, hable con el administrador",
      });
  }
};
