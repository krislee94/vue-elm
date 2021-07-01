import state from "./state";
import actions from "./action";
import mutations from "./mutations";
import { createStore } from "vuex";

export default createStore({
  state,
  actions,
  mutations,
  modules: {},
});
