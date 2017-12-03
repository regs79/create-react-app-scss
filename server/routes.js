import { Router } from 'express';

// Auth controllers
import authIndex from './controllers/auth'

// Router
const routes = Router();
/**
 * GET home page
 */
routes.get('/', (req, res) => {
  res.json({ title: 'Express Babel' });
});

/**
 * GET Calendar controllers
 */
routes.get('/auth', authIndex);

export default routes;
