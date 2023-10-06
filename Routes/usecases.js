import express from "express";


import { addUsecase, deleteUsecase, getUsecase, updateUsecase, getUsecaseStages } from "../Controllers/UsecasesController.js";

const router = express.Router();

router.post('/usecase', addUsecase);
router.get('/usecase/:id', getUsecase);
router.put('/usecase/:id', updateUsecase);
router.delete('/usecase/:id', deleteUsecase);
router.get('/usecase/:usecaseId/stages', getUsecaseStages);
export default router;