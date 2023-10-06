import express from "express";


import { addTask, deleteTask, getTaskList, updateTask, getTask } from "../Controllers/TaskController.js";

const router = express.Router();

router.post('/task', addTask);
router.get('/task', getTaskList);
router.get('/task/:id', getTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);
export default router;