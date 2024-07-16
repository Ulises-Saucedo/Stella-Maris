import { Request, Response } from "express";
import Post from "../models/post.model";
import fs from "fs";
import path from "path";

export const create = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { title, content } = req.body;

  try {
    const post = new Post({ title, content });
    await post.save();

    return res.status(201).json({
      status: 201,
      message: "Post creado correctamente",
      post,
    });
  } catch (e) {
    return res
      .status(500)
      .json({ status: 500, message: "Error interno del servidor" });
  }
};

export const one = async (req: Request, res: Response): Promise<Response> => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res
        .status(404)
        .json({ status: 404, message: "Post no encontrado" });
    }

    return res.json({
      status: 200,
      post,
    });
  } catch (e) {
    return res
      .status(500)
      .json({ status: 500, message: "Error interno del servidor" });
  }
};

export const list = async (req: Request, res: Response): Promise<Response> => {
  const { page, limit } = req.query;

  const options = {
    page: parseInt(page as string, 10) || 1,
    limit: parseInt(limit as string, 10) || 10,
    sort: { createdAt: -1 },
  };

  try {
    const posts = await Post.paginate({}, options);

    return res.json({
      status: 200,
      posts: posts.docs,
      page: posts.page,
      pages: posts.totalPages,
      total: posts.totalDocs,
      limit: posts.limit,
    });
  } catch (e) {
    return res
      .status(500)
      .json({ status: 500, message: "Error interno del servidor" });
  }
};

export const update = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { postId } = req.params;
  const body = req.body;

  try {
    const post = await Post.findByIdAndUpdate(postId, body, { new: true });
    if (!post) {
      return res
        .status(404)
        .json({ status: 404, message: "Post no encontrado" });
    }

    return res.json({
      status: 200,
      message: "Post actualizado correctamente",
      post,
    });
  } catch (e) {
    return res
      .status(500)
      .json({ status: 500, message: "Error interno del servidor" });
  }
};

export const remove = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { postId } = req.params;

  try {
    const post = await Post.findByIdAndDelete(postId);
    if (!post) {
      return res
        .status(404)
        .json({ status: 404, message: "Post no encontrado" });
    }

    return res.json({
      status: 204,
      message: "Post eliminado correctamente",
    });
  } catch (e) {
    return res
      .status(500)
      .json({ status: 500, message: "Error interno del servidor" });
  }
};

export const upload = async (req: Request, res: Response) => {
  const { postId } = req.params;
  const file = req.file;

  if (!file)
    return res
      .status(400)
      .json({ status: 400, message: "No se ha subido un archivo" });

  try {
    const post = await Post.findByIdAndUpdate(
      postId,
      { preview: file.filename },
      { new: true }
    );
    if (!post) {
      return res
        .status(404)
        .json({ status: 404, message: "Post no encontrado" });
    }

    return res.json({
      status: 200,
      post,
    });
  } catch (e) {
    return res
      .status(500)
      .json({ status: 500, message: "Error interno del servidor" });
  }
};

export const show = async (req: Request, res: Response): Promise<void> => {
  const { file } = req.params;

  const filePath = "./uploads/" + file;

  fs.stat(filePath, (error, exists) => {
    if (!exists)
      return res.status(404).json({
        status: 404,
        message: "El archivo no existe",
      });

    return res.sendFile(path.resolve(filePath));
  });
};
