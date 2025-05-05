import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { baseRegionsController } from '../controllers/index.js'
import { addRegionsController } from '../controllers/index.js'


const router = express.Router();

//CRUD
router.post('/regions/registration', (req, res) => addRegionsController.create(req, res));
router.get('/regions', authMiddleware, (req, res) => baseRegionsController.getAll(req, res));
router.get('/regions/:id', authMiddleware, (req, res) => baseRegionsController.getOne(req, res));
router.put('/regions/:id', authMiddleware, (req, res) => baseRegionsController.updateData(req, res));
router.delete('/regions/:id', authMiddleware, (req, res) => baseRegionsController.delete(req, res));

//ANOTHER ROUTES


export { router };