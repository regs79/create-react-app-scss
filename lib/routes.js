'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _auth = require('./controllers/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Router
var routes = (0, _express.Router)();
/**
 * GET home page
 */


// Auth controllers
routes.get('/', function (req, res) {
  res.json({ title: 'Express Babel' });
});

/**
 * GET Calendar controllers
 */
routes.get('/auth', _auth2.default);

exports.default = routes;