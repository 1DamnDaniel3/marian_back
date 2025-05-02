import express from 'express'

import { authMiddleware } from '../middleware/authMiddleware.js';
import { BaseUserController } from '../controllers/index.js'
import { loginController } from '../controllers/index.js'

const userController = new BaseUserController;
const router = express.Router();

//CRUD
router.post('/users/registration', (req, res) => userController.create(req, res));
router.get('/users', authMiddleware, (req, res) => userController.getAll(req, res));
router.get('/users/:id', authMiddleware, (req, res) => userController.getOne(req, res));
router.put('/users/:id', authMiddleware, (req, res) => userController.updateData(req, res));
router.delete('/users/:id', authMiddleware, (req, res) => userController.delete(req, res));

//ANOTHER ROUTES
router.post('/users/login', (req, res) => loginController.userLogin(req, res));// login
export { router };
