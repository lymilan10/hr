import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        routes: []
    },
    //   mutations改变state的状态
    mutations: {
        // 调用的时候可以不用传state
        initRoutes(state, data) {
            state.routes = data;
        }
    },
    actions: {},
    modules: {}
})