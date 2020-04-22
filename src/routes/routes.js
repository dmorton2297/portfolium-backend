import express from 'express';
import UserController from '../controllers/UserController.js';
import AuthController from '../controllers/AuthController.js';
import ProjectController from '../controllers/ProjectController.js';

const router = express.Router();

/**
 * Authentication Route
 */
const authController = new AuthController();
router.post('/login', (req, res) => {
    res.status(200).send(authController.loginUser('test', 'test'));
});

/**
 * User Routes
 */
const userController = new UserController();
router.get('/user/:id', (req, res) => {
    res.status(200).send(userController.getUser(req.params.id));
});

/**
 * Project Routes
 */
const projectController = new ProjectController();
router.get('/user/:id/projects', (req, res) => {
    res.status(200).send(projectController.getPrograms(req.params.id));
});

router.post('/user/:id/projects/create', (req, res) => {
    res.status(200).send(projectController.createProject(req.body, req.params.userId));
});

router.post('/user/:id/projects/edit', (req, res) => {
    res.status(200).send(projectController.editProject(req.body, req.params.userId));
});

router.post('/user/:id/projects/delete', (req, res) => {
    res.status(200).send(projectController.deleteProject(req.body, req.params.userId));
});

export default router;