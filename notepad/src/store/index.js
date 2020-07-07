import Vue from "vue";
import Vuex from "vuex"; //データを保存するためにインポート

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    memos: [{ id: 1, body: "サンプルのメモです" }],
  },
});
