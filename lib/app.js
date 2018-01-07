'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _middlewares = require('./middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

var _paths = require('../config/paths');

var _paths2 = _interopRequireDefault(_paths);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Constants

// import cors from 'cors';
// import session from 'express-session';
var PORT = process.env.NODE_ENV === 'development' ? process.env.PROXY_PORT : process.env.PORT;

// Initial server
/**
 * Module dependencies.
 */
// import http from 'http';
var app = (0, _express2.default)();
app.disable('x-powered-by');

// loger
app.use((0, _morgan2.default)('dev'));

// parse request bodies (req.body)
app.use(_express2.default.urlencoded({ extended: true }));

// allow overriding methods in query (?_method=put)
app.use((0, _methodOverride2.default)('_method'));

// Middlewares
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve static assets
app.use(_express2.default.static(_paths2.default.appBuild));

// api router
app.use('/api', _middlewares2.default.authentication, _routes2.default);

// start server
app.listen(PORT, function () {
  console.info('App is listening on localhost:' + PORT + ' in ' + process.env.NODE_ENV + ' mode');
});

exports.default = app;