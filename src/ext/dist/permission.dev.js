"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _router = _interopRequireDefault(require("../router"));

var _store = _interopRequireDefault(require("../store"));

var _bot_control = _interopRequireDefault(require("./bot_control"));

var _elementUi = require("element-ui");

var _nprogress = _interopRequireDefault(require("nprogress"));

require("nprogress/nprogress.css");

var _auth = require("@/utils/auth");

var _getPageTitle = _interopRequireDefault(require("@/utils/get-page-title"));

var _i18n = _interopRequireWildcard(require("./i18n"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// progress bar
// progress bar style
_nprogress["default"].configure({
  showSpinner: false
}); // NProgress Configuration


var whiteList = ['/login', '/register']; // no redirect whitelist

_router["default"].beforeEach(function _callee(to, from, next) {
  var hasToken, valid, redirect;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _nprogress["default"].start(); //loadLangs();
          //LANGS CONTROL


          _i18n["default"].locale = (0, _i18n.getLanguage)(); // set page title

          document.title = (0, _getPageTitle["default"])(to.meta.title); // determine whether the user has logged in

          hasToken = (0, _auth.getToken)();

          if (!hasToken) {
            _context.next = 32;
            break;
          }

          if (!(to.path === '/login')) {
            _context.next = 10;
            break;
          }

          // if is logged in, redirect to the home page
          next({
            path: '/'
          });

          _nprogress["default"].done();

          _context.next = 30;
          break;

        case 10:
          if (!(!_bot_control["default"].loaded && to.path != "/loading")) {
            _context.next = 14;
            break;
          }

          next({
            path: '/loading'
          });
          _context.next = 30;
          break;

        case 14:
          if (!to.meta.validation) {
            _context.next = 19;
            break;
          }

          _context.next = 17;
          return regeneratorRuntime.awrap(to.meta.validation.method(to.params));

        case 17:
          valid = _context.sent;

          if (!valid) {
            redirect = to.meta.validation.redirect;
            if (!redirect) redirect = '/';
            next({
              path: redirect
            });

            _nprogress["default"].done();
          }

        case 19:
          _context.prev = 19;
          //await store.dispatch('user/getInfo')
          next();
          _context.next = 30;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](19);
          _context.next = 27;
          return regeneratorRuntime.awrap(_store["default"].dispatch('user/resetToken'));

        case 27:
          _elementUi.Message.error(_context.t0 || 'Has Error');

          next("/login?redirect=".concat(to.path));

          _nprogress["default"].done();

        case 30:
          _context.next = 33;
          break;

        case 32:
          /* has no token*/
          if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next();
          } else {
            // other pages that do not have permission to access are redirected to the login page.
            next("/login?redirect=".concat(to.path));

            _nprogress["default"].done();
          }

        case 33:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[19, 23]]);
});

_router["default"].afterEach(function () {
  // finish progress bar
  _nprogress["default"].done();
});