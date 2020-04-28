import express from 'express';
import UserController from '../controllers/UserController.js';
import AuthController from '../controllers/AuthController.js';
import ProjectController from '../controllers/ProjectController.js';
import BlogController from '../controllers/BlogController.js';

const router = express.Router();

router.use((req, res, next) => {
    if (!req.authenticated) {
        return res.status(401).send('Unauthorized');
    }
    next();
})

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
    console.log('in here');
    res.status(200).send(userController.getUser(req.params.id));
});

router.post('/user/:id/update', (req, res) => {
    res.status(200).send(userController.updateUser(req.body, req.params.id));
});

/**
 * Project Routes
 */
const projectController = new ProjectController();
router.get('/user/:id/projects', (req, res) => {
    res.status(200).send(projectController.getPrograms(req.params.id));
});

router.post('/user/:id/projects/create', (req, res) => {
    res.status(200).send(projectController.createProject(req.body, req.params.id));
});

router.post('/user/:id/projects/edit', (req, res) => {
    res.status(200).send(projectController.editProject(req.body, req.params.id));
});

router.post('/user/:id/projects/delete', (req, res) => {
    res.status(200).send(projectController.deleteProject(req.body, req.params.id));
});

/**
 * Blog Routes
 */
const blogController = new BlogController();
router.get('/user/:id/blog', (req, res) => {
    res.status(200).send(blogController.getBlog(req.params.id))
});

router.post('/user/:id/blog', (req, res) => {
    res.status(200).send(blogController.createBlogPost(req.body, req.params.id));
})

router.post('/user/:id/blog/edit', (req, res) => {
    res.status(200).send(blogController.editBlogDetails(req.body, req.params.id));
});

router.post('/user/:id/blog/posts/edit', (req, res) => {
    // put controller logic here
    res.status(200).send(blogController.editBlogPost(req.body, req.params.id));
});

router.post('/user/:id/blog/posts/delete', (req, res) => {
    // put controller logic here
    res.status(200).send(blogController.deleteBlogPost(req.body, req.params.id));
});

router.get('/blog/:id/:userId', (req, res) => {
    res.status(200).send(blogController.getBlogPost(req.params.id, req.params.userId));
})




export default router;