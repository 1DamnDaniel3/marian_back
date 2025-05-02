import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseActivityController, regionActivities } from '../controllers/index.js';


const router = express.Router();

//CRUD
router.post('/activities/registration', authMiddleware, (req, res) => baseActivityController.create(req, res));
router.get('/activities', authMiddleware, (req, res) => baseActivityController.getAll(req, res));
router.get('/activities/:id', authMiddleware, (req, res) => baseActivityController.getOne(req, res));
router.put('/activities/:id', authMiddleware, (req, res) => baseActivityController.updateData(req, res));
router.delete('/activities/:id', authMiddleware, (req, res) => baseActivityController.delete(req, res));

//ANOTHER ROUTES

router.post('/regionActivities', (req, res) => regionActivities.getRegAct(req, res));


export { router };