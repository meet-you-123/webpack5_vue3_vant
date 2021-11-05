import { JsxEmit } from "typescript";
import { createStore } from "vuex";
const store = createStore({
  state: {
    title: "渐进式开发框架",
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("userData")) || {},
  },
  getters: {},
  mutations: {
    login(state, parameters) {
      let data = parameters.data;
      state.token = data.token;
      state.user = data;
      localStorage.setItem("token", data.token);
      localStorage.setItem("userData", JSON.stringify(data));
    },
  },
  actions: {},
  modules: {},
});

export default store;
