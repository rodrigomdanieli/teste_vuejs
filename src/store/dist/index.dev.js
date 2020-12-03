"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _getters = _interopRequireDefault(require("./getters"));

var _app = _interopRequireDefault(require("./modules/app"));

var _settings = _interopRequireDefault(require("./modules/settings"));

var _user = _interopRequireDefault(require("./modules/user"));

var _overview = _interopRequireDefault(require("./modules/dashboards/overview"));

var _main = _interopRequireDefault(require("./modules/tickets/main"));

var _autolist = _interopRequireDefault(require("./modules/autolist"));

var _requests = _interopRequireDefault(require("./modules/requests"));

var _server_graphics = _interopRequireDefault(require("./modules/server_graphics"));

var _langs = _interopRequireDefault(require("./modules/langs"));

var _bot_groups = _interopRequireDefault(require("./bots/bot_groups"));

var _bot_tickets = _interopRequireDefault(require("./bots/bot_tickets"));

var _bot_customer = _interopRequireDefault(require("./bots/bot_customer"));

var _bot_server = _interopRequireDefault(require("./bots/bot_server"));

var _bot_maintenance = _interopRequireDefault(require("./bots/bot_maintenance"));

var _bot_graphics = _interopRequireDefault(require("./bots/bot_graphics"));

var _workbar = _interopRequireDefault(require("./modules/workbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  modules: {
    app: _app["default"],
    settings: _settings["default"],
    user: _user["default"],
    overview: _overview["default"],
    ticket_main: _main["default"],
    autolist: _autolist["default"],
    request: _requests["default"],
    langs: _langs["default"],
    server_graphics: _server_graphics["default"],
    bot_groups: _bot_groups["default"],
    bot_tickets: _bot_tickets["default"],
    bot_customer: _bot_customer["default"],
    bot_server: _bot_server["default"],
    bot_maintenance: _bot_maintenance["default"],
    bot_graphics: _bot_graphics["default"],
    workbar: _workbar["default"]
  },
  getters: _getters["default"]
});
var _default = store;
exports["default"] = _default;