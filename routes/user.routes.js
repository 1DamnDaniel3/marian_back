import express from 'express'

import {BaseUserController} from '../controllers/index.js'

const userController = new BaseUserController;
const router = express.Router();

//CRUD
router.post('/users/registration', (req, res) => userController.create(req, res));
router.get('/users', (req, res) => userController.getAll(req, res));
router.get('/users/:id', (req, res) => userController.getOne(req, res));
router.put('/users/:id', (req, res) => userController.updateData(req, res));
router.delete('/users/:id', (req, res) => userController.delete(req, res));

//ANOTHER ROUTES
router.post('/users/login', (req, res) => userController.userLogin(req, res));// login
export {router};
