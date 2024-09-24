import { Schema, model, Document } from "mongoose";


interface TaskAttributes extends Document {
  title: string;
  description: string;
  status: "todo" | "doing" | "done";
  priority: "low" | "medium" | "high";
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new Schema<TaskAttributes>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["todo", "doing", "done"], default: "todo" },
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" }
}, { timestamps: true });

const Task = model<TaskAttributes>("Task", taskSchema);

export default Task;
