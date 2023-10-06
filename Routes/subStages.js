import express from "express";


import { addSubStages, getSubStage, updateSubStage, deleteSubstage, getSubStagesTasks } from "../Controllers/subStageController.js";

const router = express.Router();

router.post('/sub-stage', addSubStages);
router.get('/sub-stage/:id', getSubStage);
router.put('/sub-stage/:id', updateSubStage);
router.delete('/sub-stage/:id', deleteSubstage);
router.get('/sub-stage/:id/tasks', getSubStagesTasks);

export default router;