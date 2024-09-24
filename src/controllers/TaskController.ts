import { Handler, Request, Response } from "express";
import Task from "../models/Task";
import HttpError from "../errors/HttpError";
import { z } from "zod";

const StoreRequestSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["low", "medium", "high"])
});

const UpdateRequestSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(["todo", "doing", "done"]).optional(),
  priority: z.enum(["low", "medium", "high"]).optional()
});


export class TaskController {
  // GET /api/tasks
  index: Handler = async (req, res) => {
    const tasks = await Task.find();
    return res.json(tasks);
  }

  // POST /api/tasks
  store = async (req: Request, res: Response) => {
    const parsedBody = StoreRequestSchema.parse(req.body);
    const newTask = await Task.create(parsedBody);
    res.status(201).json(newTask);
  }

  // GET /api/tasks/:id
  show: Handler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const task = await Task.findById(id);
      if (!task) throw new HttpError(404, "task not found");
      res.json(task);
    } catch (err) {
      next(err)
    }
  }

  // PUT /api/tasks/:id
  update: Handler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const parsedBody = UpdateRequestSchema.parse(req.body);
      const updatedTask = await Task.findByIdAndUpdate(id, parsedBody, { new: true });
      if (!updatedTask) throw new HttpError(404, "task not found");
      res.json(updatedTask);
    } catch (err) {
      next(err);
    }
  }

  // DELETE /api/tasks/:id
  delete: Handler = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedTask = await Task.findByIdAndDelete(id);
      if (!deletedTask) throw new HttpError(404, "task not found");
      res.json(deletedTask);
    } catch (err) {
      next(err);
    }
  }
}