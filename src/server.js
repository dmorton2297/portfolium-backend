import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes.js';

// Create application
const app = express();
const port = process.env.PORT || 3200;

// Setup Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup router
app.use('/', router);

app.listen(port, () => {
    console.log(`portfolium-backend: running at port ${port}`);
});

