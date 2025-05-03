import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseApplicationController } from '../controllers/index.js';


const router = express.Router();

//CRUD
router.post('/applications/registration', authMiddleware, (req, res) => baseApplicationController.create(req, res));
router.get('/applications', authMiddleware, (req, res) => baseApplicationController.getAll(req, res));
router.get('/applications/:id', authMiddleware, (req, res) => baseApplicationController.getOne(req, res));
router.put('/applications/:id', authMiddleware, (req, res) => baseApplicationController.updateData(req, res));
router.delete('/applications/:id', authMiddleware, (req, res) => baseApplicationController.delete(req, res));

//ANOTHER ROUTES



export { router };