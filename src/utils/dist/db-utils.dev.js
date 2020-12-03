"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTypeByStatus = getTypeByStatus;
exports.getTypeByType = getTypeByType;
exports.getStatusClass = getStatusClass;

/**
 * Get type button of status ticket
 * @var {string}
 */
function getTypeByStatus(type) {
  switch (type) {
    case "Open":
      return "success";

    case "Reopen":
      return "primary";

    case "In Progress":
      return "warning";

    case "Closed":
      return "danger";

    case "Closed Without Soluction":
      return "danger";
  }
}
/**
 * Get type button of type ticket
 * @var {string}
 */


function getTypeByType(type) {
  switch (type) {
    case "Incident":
      return "warning";

    case "Request":
      return "success";

    case "Maintanence":
      return "";

    case "Monitoring":
      return "info";

    case "Emergency":
      return "dange";

    case "Email":
      return "info";

    case "Coordenation":
      return "";
  }
}
/**
 * Get css class of badges for server status
 * @param {char} status
 */


function getStatusClass(status) {
  var cl = "badge ";

  switch (status) {
    case "G":
      cl += "badge-green";
      break;

    case "Y":
      cl += "badge-yellow";
      break;

    case "R":
      cl += "badge-red";
      break;

    case "B":
      cl += "badge-blue";
      break;

    default:
      cl += "badge-gray";
  }

  return cl;
}