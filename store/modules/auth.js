// import { URLSearchParams } from "url";
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
  finalizeLogin({ commit }) {
    // Take current url
    let url = window.location.hash.replace("#", "");
    let usp = new URLSearchParams(url);
    let token;
    for (let [key, value] of usp) {
      if (key === "access_token") {
        token = value;
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
