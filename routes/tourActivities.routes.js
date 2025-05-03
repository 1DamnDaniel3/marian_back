import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseTourActivitiesController } from '../controllers/index.js'


const router = express.Router();

//CRUD
router.post('/tourActivities/registration', authMiddleware, (req, res) => baseTourActivitiesController.create(req, res));
router.get('/tourActivities', authMiddleware, (req, res) => baseTourActivitiesController.getAll(req, res));
router.get('/tourActivities/:id', authMiddleware, (req, res) => baseTourActivitiesController.getOne(req, res));
router.put('/tourActivities/:id', (req, res) => baseTourActivitiesController.updateData(req, res));
router.delete('/tourActivities/:id', authMiddleware, (req, res) => baseTourActivitiesController.delete(req, res));

//ANOTHER ROUTES
router.post('/tourActivities/update/:tour_id', (req, res) => baseTourActivitiesController.update(req, res));



export { router };