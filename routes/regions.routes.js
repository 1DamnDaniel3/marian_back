import express from 'express'

import { baseRegionsController } from '../controllers/index.js'
import { addRegionsController } from '../controllers/index.js'


const router = express.Router();

//CRUD
router.post('/regions/registration', (req, res) => addRegionsController.create(req, res));
router.get('/regions', (req, res) => baseRegionsController.getAll(req, res));
router.get('/regions/:id', (req, res) => baseRegionsController.getOne(req, res));
router.put('/regions/:id', (req, res) => baseRegionsController.updateData(req, res));
router.delete('/regions/:id', (req, res) => baseRegionsController.delete(req, res));

//ANOTHER ROUTES


export { router };