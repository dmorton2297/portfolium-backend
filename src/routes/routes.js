import express from 'express';
import UserController from '../controllers/UserController.js';
import AuthController from '../controllers/AuthController.js';
import ProjectController from '../controllers/ProjectController.js';
import BlogController from '../controllers/BlogController.js';

const router = express.Router();

router.use((req, res, next) => {
    const isPublic = req.url.includes('/blog/');
    if (!req.authenticated && !isPublic) {
        return res.status(401).send('Unauthorized');
    }
    next();
})


/**
 * User Routes
 */
const userController = new UserController();
router.get('/user/:id', async (req, res) => {
    const u = await userController.getUser(req.params.id);
    res.status(200).send(u);
});

router.post('/user/:id/update', async (req, res) => {
    console.log('in here');
    const user = await userController.updateUser(req.body, req.params.id);
    return res.status(200).send(user);
});

router.post('/user/create', async (req, res) => {
    const created = await userController.createUser(req.body);
    if (!created) {
        return res.status(500).send('User not created');
    } else {
        return res.status(200);
    }
})

/**
 * Project Routes
 */
const projectController = new ProjectController();
router.get('/user/:id/projects', async (req, res) => {
    const projects = await projectController.getPrograms(req.params.id);
    res.status(200).send(projects);
});

router.post('/user/:id/projects/create', async (req, res) => {
    const projects = await projectController.createProject(req.body, req.params.id);
    res.status(200).send(projects);
});

router.post('/user/:id/projects/edit', async (req, res) => {
    const project = await projectController.editProject(req.body, req.params.id);
    res.status(200).send(project);
});

router.post('/user/:id/projects/delete', async (req, res) => {
    const deleted = await projectController.deleteProject(req.body, req.params.id);
    res.status(200).send(deleted);
});

/**
 * Blog Routes
 */
const blogController = new BlogController();
router.get('/user/:id/blog', async (req, res) => {
    const b = await blogController.getBlog(req.params.id);
    res.status(200).send(b);
});

router.post('/user/:id/blog', async (req, res) => {
    const p = await blogController.createBlogPost(req.body, req.params.id);
    res.status(200).send(p);
})

router.post('/user/:id/blog/edit', async (req, res) => {
    const r = await blogController.editBlogDetails(req.body, req.params.id);
    res.status(200).send(r);
});

router.post('/user/:id/blog/posts/edit', async (req, res) => {
    // put controller logic here
    const p = await blogController.editBlogPost(req.body, req.params.id);
    res.status(200).send(p);
});

router.post('/user/:id/blog/posts/delete', async (req, res) => {
    const p = await blogController.deleteBlogPost(req.body, req.params.id);
    res.status(200).send(p);
});

router.get('/blog/:id/:userId', async (req, res) => {
    const p = await blogController.getBlogPost(req.params.id, req.params.userId);
    res.status(200).send(p);
})




export default router;