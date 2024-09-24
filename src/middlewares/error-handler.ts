import { ErrorRequestHandler } from "express";
import HttpError from "../errors/HttpError";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({ message: err.message });
  } else if (err instanceof Error) {
    return res.status(500).json({ message: err.message });
  } else {
    return res.status(500).json({ message: "internal server error" });
  }
}
