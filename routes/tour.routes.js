import express from 'express'

import {baseTourController} from '../controllers/index.js'
import {getPopularTours} from '../controllers/index.js'


const router = express.Router();

//CRUD
router.post('/tours/registration', (req, res) => baseTourController.create(req, res));
router.get('/tours', (req, res) => baseTourController.getAll(req, res));
router.get('/tours/:id', (req, res) => baseTourController.getOne(req, res));
router.put('/tours/:id', (req, res) => baseTourController.updateData(req, res));
router.delete('/tours/:id', (req, res) => baseTourController.delete(req, res));

//ANOTHER ROUTES

router.get('/getPopularTours', (req, res) => getPopularTours.getPopular(req, res));

export {router};