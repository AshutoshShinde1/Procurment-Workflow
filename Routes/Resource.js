import express from "express";


import { addResources, getResources, updateResources, getResource } from "../Controllers/ResourcesController.js";

const router = express.Router();

router.post('/resource', addResources);
router.get('/resource', getResources);
router.put('/resource/:id', updateResources);
// router.delete('/resource/:id',deleteUsecase);
router.get('/resource/:id', getResource);
export default router;