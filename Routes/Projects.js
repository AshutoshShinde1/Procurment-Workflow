import express from "express";


import { getProjectList, addProject, getProject, updateProject, deleteProject, getProjectUsecases } from "../Controllers/ProjectsController.js";

const router = express.Router();

router.get('/project', getProjectList);
router.post('/project', addProject);
router.get('/project/:id', getProject);
router.put('/project/:id', updateProject);
router.delete('/project/:id', deleteProject);
router.get('/project/:id/usecases', getProjectUsecases);

export default router;