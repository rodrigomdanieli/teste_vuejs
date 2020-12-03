

const default_users = []


/**
 * Get type button of status ticket
 * @var {string}
 */
export function getTypeByStatus(type) {
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
export function getTypeByType(type) {
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
export function getStatusClass(status) {
  let cl = "badge ";
  switch (status) {
    case "G":
      cl += "badge-green-bg";
      break;
    case "Y":
      cl += "badge-yellow-bg";
      break;
    case "R":
      cl += "badge-red-bg";
      break;
    case "B":
      cl += "badge-blue-bg";
      break;
    default:
      cl += "badge-gray-bg";
  }
  return cl;
}

