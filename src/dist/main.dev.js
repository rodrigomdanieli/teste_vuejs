"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _elementUi = _interopRequireDefault(require("element-ui"));

var _en = _interopRequireDefault(require("element-ui/lib/locale/lang/en"));

var _moment = _interopRequireDefault(require("moment"));

var _App = _interopRequireDefault(require("./App"));

var _store = _interopRequireDefault(require("./store"));

var _router = _interopRequireDefault(require("./router"));

var _i18n = _interopRequireDefault(require("./ext/i18n"));

require("@/styles/index.scss");

require("@/icons");

require("@/ext/permission");

require("@/ext/components");

require("@/ext/bot_control");

require("moment/locale/pt-br");

require("moment/locale/es");

require("normalize.css/normalize.css");

require("element-ui/lib/theme-chalk/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// lang i18n
// global css
// icon
// permission control
// A modern alternative to CSS resets
_vue["default"].use(_elementUi["default"], {
  locale: _en["default"]
});

_vue["default"].prototype.moment = _moment["default"];
_vue["default"].config.productionTip = false;
new _vue["default"]({
  el: '#app',
  router: _router["default"],
  store: _store["default"],
  i18n: _i18n["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
});