"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAuthTicket = validateAuthTicket;
exports.validateComponent = validateComponent;

var _main = require("@/api/tickets/main");

var _elementUi = require("element-ui");

function validateAuthTicket(params) {
  return regeneratorRuntime.async(function validateAuthTicket$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", (0, _main.checkAuth)(params).then(function (success) {
            if (success.status == "ok") {
              if (!success.data.authorized || success.data.authorized == " ") {
                (0, _elementUi.Message)({
                  type: "warning",
                  message: "Ticket not exist or is not allowed!",
                  duration: 6 * 1000
                });
                return false;
              }
            }

            ;
            return true;
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

function validateComponent(component) {
  return regeneratorRuntime.async(function validateComponent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", true);

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
}