import express from 'express';
import UserController from '../controllers/UserController.js';
import AuthController from '../controllers/AuthController.js';

const router = express.Router();

/**
 * Authentication Route
 */
const authController = new AuthController();
router.get('/login', (req, res) => {
    res.status(200).send(authController.loginUser('test', 'test'));
});

/**
 * User Routes
 */
const userController = new UserController();
router.get('/user/:id', (req, res) => {
    res.status(200).send(userController.getUser(req.params.id))
});

export default router;