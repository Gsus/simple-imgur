import api from "../../api/helper";
import { router } from "../../src/main";

const state = {
  imgs: [],
};

const getters = {
  allImgs: (state) => state.imgs,
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

    // Get only the info we want from imgsData. (link, name, id)
    let relevantImgsData = [];
    for (let img of imgsData) {
      relevantImgsData.push({
        name: img.name,
        link: img.link,
        id: img.id,
      });
    }
    // Set those imgs to the state
    commit("setImgs", relevantImgsData);
  },
  async uploadImgs({ rootState }, images) {
    // Get token
    const { token } = rootState.auth;
    // Call API module to upload the images
    await api.uploadImgs(images, token);
    // Redirect to Gallery component
    router.push("/");
    // ......
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
