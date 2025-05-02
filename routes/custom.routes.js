import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseCustomController } from '../controllers/index.js'


const router = express.Router();

//CRUD
router.post('/customTours/registration', authMiddleware, (req, res) => baseCustomController.create(req, res));
router.get('/customTours', authMiddleware, (req, res) => baseCustomController.getAll(req, res));
router.get('/customTours/:id', authMiddleware, (req, res) => baseCustomController.getOne(req, res));
router.put('/customTours/:id', authMiddleware, (req, res) => baseCustomController.updateData(req, res));
router.delete('/customTours/:id', authMiddleware, (req, res) => baseCustomController.delete(req, res));

//ANOTHER ROUTES


export { router };