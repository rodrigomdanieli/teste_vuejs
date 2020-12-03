"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startSession = startSession;

var _router = require("@/router");

var _i18n = require("./i18n");

var _nprogress = _interopRequireDefault(require("nprogress"));

var _factory = require("@/router/factory");

var _bot_control = require("./bot_control");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function startSession() {
  return new Promise(function _callee(resolve) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _bot_control.startBots)().then(function () {
              return (0, _i18n.loadLangs)().then(function () {
                return resolve();
              });
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  });
}