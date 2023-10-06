import express from "express";


import { addStages, getStage, updateStage, deleteStage, getStageSubStages } from "../Controllers/StagesController.js";

const router = express.Router();

router.post('/stage', addStages);
router.get('/stage/:id', getStage);
router.put('/stage/:id', updateStage);
router.delete('/stage/:id', deleteStage);
router.get('/stage/:id/sub-stages', getStageSubStages);

export default router;