'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var authentication = function authentication(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    var tokenKey = token.split(' ');
    if (tokenKey.toString() === process.env.DEMO_AUTH_TOKEN) {
      // TODO
      // Implment real authentication system
      // Just for demo
      req.user = {
        success: true,
        username: 'Tim Tawan',
        token: token
      };
      return next();
    }
  }
  // Redirect when failed
  return res.redirect('/');
};
exports.default = authentication;