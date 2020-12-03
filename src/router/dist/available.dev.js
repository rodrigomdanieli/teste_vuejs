"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticRoutes = void 0;

var _layout = _interopRequireDefault(require("@/layout"));

var _routeValidate = require("@/utils/route-validate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var staticRoutes = [{
  path: '/login',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/auth/login/index'));
    });
  },
  hidden: true
}, {
  path: '/loading',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/auth/loading'));
    });
  },
  hidden: true
}, {
  path: '/',
  component: _layout["default"],
  name: 'Dashboard',
  redirect: '/overview',
  meta: {
    title: 'Dash',
    icon: 'el-icon-notebook-2'
  },
  children: [{
    path: '/overview',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/dashboard'));
      });
    },
    name: 'Overview',
    meta: {
      title: 'Overview'
    }
  }]
}, {
  path: '/s',
  component: _layout["default"],
  name: 'Servers',
  hidden: true,
  children: [{
    path: '/s/:id',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/server'));
      });
    },
    name: 'Server',
    meta: {
      title: 'Server'
    }
  }]
}, {
  path: '/g',
  component: _layout["default"],
  name: 'Groups',
  hidden: true,
  children: [{
    path: '/g/:id',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/group'));
      });
    },
    name: 'Group',
    meta: {
      title: 'Group'
    }
  }]
}, {
  path: '/c',
  component: _layout["default"],
  name: 'Customer',
  hidden: true,
  children: [{
    path: '/c/:id',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/customer'));
      });
    },
    name: 'Customer',
    meta: {
      title: 'Customer'
    }
  }]
}, {
  path: '/404',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/404'));
    });
  },
  hidden: true
}, {
  path: '*',
  redirect: '/404',
  hidden: true
}];
exports.staticRoutes = staticRoutes;