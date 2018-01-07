"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var authIndex = function authIndex(req, res) {
  var user = req.user;
  res.json(user);
};

exports.default = authIndex;