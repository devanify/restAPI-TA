import express from "express";
import achievementsController from '../controller/achievementsController.js';

const router = express.Router();

// app.method('path', handler)
// READ - GET
router.get('/', achievementsController.getAllAchievements)

// CREAT - POST
router.post('/', achievementsController.createAchivement)

//UPDATE - PATCH
router.patch('/:nim', achievementsController.updateAchievement)

//DELETE - DELETE
router.delete('/:nim', achievementsController.deleteAchievement)

export default router;
