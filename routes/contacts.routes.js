import express from 'express'

import { baseContactsController } from '../controllers/index.js'


const router = express.Router();

//CRUD
router.post('/contacts/registration', (req, res) => baseContactsController.create(req, res));
router.get('/contacts', (req, res) => baseContactsController.getAll(req, res));
router.get('/contacts/:id', (req, res) => baseContactsController.getOne(req, res));
router.put('/contacts/:id', (req, res) => baseContactsController.updateData(req, res));
router.delete('/contacts/:id', (req, res) => baseContactsController.delete(req, res));

//ANOTHER ROUTES


export { router };