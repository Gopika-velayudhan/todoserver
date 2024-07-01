import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    task: String
});

const Task = mongoose.model("Task", TaskSchema);
export default Task;

