import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const userSelectedDarkMode =
  window.localStorage.getItem("isDarkMode") === "true";
// Initial State

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  window.localStorage.setItem("isDarkMode", "true");
}
const state = {
  isDarkMode: userSelectedDarkMode
};

const getters = {
  isDarkMode(state) {
    return state.isDarkMode;
  }
};

const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      document.body.style.background = "#f0f3f5";
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      document.body.style.background = "#212c4f";
      window.localStorage.setItem("isDarkMode", "true");
    }
  }
};

const actions = {
  triggerDarkMode(context) {
    context.commit("toggleDarkMode");
  }
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {}
});
