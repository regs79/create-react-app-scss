/**
 * Module dependencies.
 */
// import http from 'http';
import express from 'express';
import logger from 'morgan';
import path from 'path';
// import cors from 'cors';
// import session from 'express-session';
import methodOverride from 'method-override';
import middlewares from './middlewares'

import paths from '../config/paths';
import routes from './routes';

// Constants
const PORT = process.env.NODE_ENV === 'development' ? process.env.PROXY_PORT : process.env.PORT

// Initial server
const app = express();
app.disable('x-powered-by');

// loger
app.use(logger('dev'));

// parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }))

// allow overriding methods in query (?_method=put)
app.use(methodOverride('_method'));

// Middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve static assets
app.use(express.static(paths.appBuild));

// api router
app.use('/api', middlewares.authentication, routes);

// start server
app.listen(PORT, () => {
  console.info(`App is listening on ${process.env.HOST}:${PORT} in ${process.env.NODE_ENV} mode`);
});

export default app;
