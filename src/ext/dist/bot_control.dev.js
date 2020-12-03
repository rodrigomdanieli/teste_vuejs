"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startBots = startBots;
exports.stopBots = stopBots;
exports["default"] = void 0;

var _store = _interopRequireDefault(require("../store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var intervalCheck = 60000;
var availabel_bots = ['bot_groups', 'bot_customer', 'bot_server', 'bot_graphics'];
var config = {
  timers: {
    reload: undefined,
    update: undefined
  },
  loaded: false
};

var loadBots = function loadBots() {
  return regeneratorRuntime.async(function loadBots$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Promise.all(availabel_bots.map(function (el) {
            return _store["default"].dispatch(el + '/loadBot');
          })));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

var reloadBots = function reloadBots() {
  availabel_bots.forEach(function (el) {
    _store["default"].dispatch(el + '/updateBot');
  });
};

var checkNeedUpdate = function checkNeedUpdate() {
  availabel_bots.forEach(function (el) {
    _store["default"].dispatch(el + '/needReloadBot');
  });
};

var setDefaults = function setDefaults() {
  availabel_bots.forEach(function (el) {
    _store["default"].dispatch(el + '/setDefaults');
  });
};

function startBots() {
  return regeneratorRuntime.async(function startBots$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(loadBots());

        case 2:
          config.loaded = true;
          config.timers.reload = setInterval(function () {
            return reloadBots();
          }, 250);
          config.timers.update = setInterval(function () {
            return checkNeedUpdate();
          }, intervalCheck);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function stopBots() {
  config.loaded = false;
  clearInterval(config.timers.reload);
  clearInterval(config.timers.update);
  setDefaults();
}

var _default = config;
exports["default"] = _default;