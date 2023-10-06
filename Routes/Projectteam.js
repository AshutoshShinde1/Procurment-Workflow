import express from "express";


import { addProjectTeam, getProjectTeamList, updateProjectTeam, deleteProjectTeam, getProjectTeam } from "../Controllers/ProjectTeamController.js";

const router = express.Router();

router.post('/project-team', addProjectTeam);
router.get('/project-team', getProjectTeamList);
router.put('/project-team/:id', updateProjectTeam);
router.delete('/project-team/:id', deleteProjectTeam);
router.get('/project-team/:id', getProjectTeam);
export default router;