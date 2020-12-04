"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _elementUi = require("element-ui");

var _store = _interopRequireDefault(require("@/store"));

var _auth = require("@/utils/auth");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var token; // create an axios instance

var service = _axios["default"].create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 15000
}); // request interceptor


service.interceptors.request.use(function (config) {
  // console.log(moment().format("H:m:s") + " => " + config.url)
  token = config.baseURL + config.url;

  if ((0, _auth.getToken)()) {
    config.headers['DBToken'] = (0, _auth.getToken)();
  }

  return config;
}, function (error) {
  // do something with request error
  console.log(error); // for debug

  return Promise.reject(error);
}); // response interceptor

service.interceptors.response.use(
/**
 * If you want to get http information such as headers or status
 * Please return  response => response
*/

/**
 * Determine the request status by custom code
 * Here is just an example
 * You can also judge the status by HTTP Status Code
 */
function (response) {
  var res = response.data;
  return res; // if the custom code is not 20000, it is judged as an error.

  /*
  if (res.code !== 20000) {
    Message({
      message: res.message || 'Error',
      type: 'error',
      duration: 5 * 1000
    })
     // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      // to re-login
      MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        confirmButtonText: 'Re-Login',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      })
    }
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    return res
  }*/
}, function (error) {
  console.log(error); // for debug

  (0, _elementUi.Message)({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  });
  return Promise.reject(error);
});
var _default = service;
exports["default"] = _default;
