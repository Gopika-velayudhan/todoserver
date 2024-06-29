import express from 'express'
import { CreateTask,FetchTask,UpdateTask,DeleteTask } from '../controller/TaskController.js'

const route = express.Router()

route

.post("/tasks",CreateTask)
.get("/tasks",FetchTask)
.put("/tasks/:id",UpdateTask)
.delete("/tasks/:id",DeleteTask)

export default route