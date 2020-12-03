"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImport = getImport;

var _layout = _interopRequireDefault(require("@/layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var context = require.context("@/views", true, /index.vue/i);

var importComponents = context.keys().map(context).map(function (m) {
  return m;
});

var importLayout = require.context("@/layout", true, /index.vue/i).keys().map(function (el) {
  var context = el.replace(".", "@/layout");
  var array = [];

  array[context.replace("/index.vue", "")] = function () {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("".concat(context)));
    });
  };

  return array;
});

function getImport(map) {//     let retorno = false;
  //     importComponents.forEach(el => {
  //         if(map in el)
  //             retorno = el[map]
  //     });
  //     return retorno;
}