"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  tickets: [],
  main: []
};
var mutations = {
  ADD_TICKET: function ADD_TICKET(state, id) {
    if (!state.tickets.find(function (el) {
      return el == id;
    })) state.tickets.push(id);
  },
  RM_TICKET: function RM_TICKET(state, id) {
    var index = state.tickets.findIndex(function (el) {
      return el == id;
    });
    if (index >= 0) delete state.tickets.splice(index, 1);
  },
  ADD_MAIN: function ADD_MAIN(state, id) {
    if (!state.main.find(function (el) {
      return el == id;
    })) state.main.push(id);
  },
  RM_MAIN: function RM_MAIN(state, id) {
    var index = state.main.findIndex(function (el) {
      return el == id;
    });
    if (index >= 0) delete state.main.splice(index, 1);
  }
};
var actions = {
  addTicketToWorkbar: function addTicketToWorkbar(_ref, id) {
    var commit = _ref.commit;
    commit('ADD_TICKET', id);
  },
  rmTicketToWorkbar: function rmTicketToWorkbar(_ref2, id) {
    var commit = _ref2.commit;
    commit('RM_TICKET', id);
  },
  addMaintenanceToWorkbar: function addMaintenanceToWorkbar(_ref3, id) {
    var commit = _ref3.commit;
    commit('ADD_MAIN', id);
  },
  rmMaintenanceToWorkbar: function rmMaintenanceToWorkbar(_ref4, id) {
    var commit = _ref4.commit;
    commit('RM_MAIN', id);
  }
};
var getters = {
  getTickets: function getTickets(state) {
    if (state.tickets.length > 0) return state.tickets;else return false;
  },
  getMaintenances: function getMaintenances(state) {
    if (state.main.length > 0) return state.main;else return false;
  }
};
var _default = {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
exports["default"] = _default;