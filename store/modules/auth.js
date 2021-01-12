import api from "../../api/helper";

// State
const state = {
  token: null,
};

// Getters
const getters = {
  getToken: (state) => state.token,
};

// Actions
const actions = {
  login() {
    api.login();
  },
  logout({ commit }) {
    commit("setToken", null);
  },
  finalizeLogin({ commit }) {
    // Take current url, remove the "#" at the beginning
    let url = window.location.hash.replace("#", "");
    // Pass that into a URLSearchParams instance
    let usp = new URLSearchParams(url);
    let token;
    // Looping over search params to get the access_token
    for (let [key, value] of usp) {
      if (key === "access_token") {
        token = value;
        break;
      }
    }
    commit("setToken", token);
  },
};

// Mutations
const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
