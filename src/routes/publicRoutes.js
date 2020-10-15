import express from 'express';
import AuthController from '../controllers/AuthController.js';

const prouter = express.Router();

const authController = new AuthController();
prouter.get('/auth/exists/:email', async (req, res) => {
    const test = await authController.userExists(req.params.email);
    res.status(200).send(test);
});

export default prouter;