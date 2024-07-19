import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { createToken } from "../helpers/jwt";
import { AuthRequest } from "../ts/interfaces/auth.interfaces";

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password, role } = req.body;

  try {
    const userFound = await User.findOne({ email: email });
    if (userFound) {
      return res
        .status(400)
        .json({ status: 400, message: "El email ya esta en uso" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    return res.status(201).json({
      status: 201,
      message: "Usuario creado exitosamente",
    });
  } catch (e) {
    return res
      .status(500)
      .json({ status: 500, message: "Error interno del servidor" });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(404)
        .json({ status: 404, message: "El usuario no existe" });

    const isPasswordMatch: boolean = await bcrypt.compare(
      password,
      user.password
    );
    if (!isPasswordMatch)
      return res.status(400).json({
        status: 400,
        message: "Credenciales incorrectas",
      });

    const token: string = await createToken({
      id: user._id.toString(),
      role: user.role,
    });

    return res.json({
      status: 200,
      message: "Sesión iniciada correctamente",
      token,
    });
  } catch (e) {
    return res
      .status(500)
      .json({ status: 500, message: "Error interno del servidor" });
  }
};

export const updateAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { userId } = req.params;
  const userUpdated = req.body;

  try {
    if (userUpdated.password) {
      const hashedPassword: string = await bcrypt.hash(
        userUpdated.password,
        10
      );

      userUpdated.password = hashedPassword;
    }

    if (userUpdated.email) {
      const existingUser = await User.findOne({ email: userUpdated.email });
      if (existingUser && existingUser._id.toString() !== userId)
        return res
          .status(400)
          .json({ status: 400, message: "El email ya está en uso" });
    }

    const updatedUser = await User.findByIdAndUpdate(userId, userUpdated, {
      new: true,
    });
    if (!updatedUser)
      return res.status(404).json({
        status: 404,
        message: "No se encontró el usuario para actualizarlo",
      });

    return res.json({
      status: 200,
      message: "Cuenta actualizada exitosamente",
      user: {
        id: updatedUser._id.toString(),
        email: updatedUser.email,
      },
    });
  } catch (e) {
    return res
      .status(500)
      .json({ status: 500, message: "Error al actualizar el usuario" });
  }
};

export const deleteAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { userId } = req.params;

  try {
    const deletedAccount = await User.findByIdAndDelete(userId);
    if (!deletedAccount)
      return res.status(404).json({
        status: 404,
        message: "No se encontró el usuario para eliminarlo",
      });

    return res.json({
      status: 200,
      message: "Cuenta eliminada exitosamente",
    });
  } catch (e) {
    return res
      .status(500)
      .json({ status: 500, message: "Error al eliminar el usuario" });
  }
};

export const verify = async (
  req: AuthRequest,
  res: Response
): Promise<Response> => {
  const user = req.user;

  const userFound = await User.findById(user?.id);
  if (!userFound)
    return res.status(404).json({
      status: 404,
      message: "No se encontró el usuario",
    });

  return res.json({
    status: 200,
    user: {
      id: userFound._id.toString(),
      email: userFound.email,
      role: userFound.role,
    },
  });
};
