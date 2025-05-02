import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseTourController, getPopularTours } from '../controllers/index.js'


const router = express.Router();

//CRUD
router.post('/tours/registration', authMiddleware, (req, res) => baseTourController.create(req, res));
router.get('/tours', authMiddleware, (req, res) => baseTourController.getAll(req, res));
router.get('/tours/:id', authMiddleware, (req, res) => baseTourController.getOne(req, res));
router.put('/tours/:id', authMiddleware, (req, res) => baseTourController.updateData(req, res));
router.delete('/tours/:id', authMiddleware, (req, res) => baseTourController.delete(req, res));

//ANOTHER ROUTES

router.get('/getPopularTours', (req, res) => getPopularTours.getPopular(req, res));

export { router };