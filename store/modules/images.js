import api from "../../api/helper";

const state = {
  imgs: [],
};

const getters = {
  getAllImgs(state) {
    return state.imgs;
  },
};

const mutations = {
  setImgs(state, imgs) {
    state.imgs = imgs;
  },
};

const actions = {
  async fetchImgs({ rootState, commit }) {
    // Destructuring.
    // It could've also been
    // let token = rootState.auth.token
    const { token } = rootState.auth;
    let imgsData = await api.fetchImgs(token);

    // Get only the info we want from imgsData. (link, name)
    let relevantImgsData = [];
    for (let img of imgsData) {
      relevantImgsData.push({
        name: img.name,
        link: img.link,
      });
    }
    // Set those imgs to the state
    commit("setImgs", relevantImgsData);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
