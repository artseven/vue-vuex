import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + " Clicks";
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter+= payload;
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions: {
    // increment: context => {
    // 	context.commit('increment');

    // }
    //es5 version
    //vs
    //es6 version
    increment: ({ commit }, payload) => {
      commit("increment", payload);
    },
    decrement: ({ commit }, payload) => {
      commit("decrement");
    },
    asyncIncrement: ({ commit }) => {
      setTimeout(() => {
        commit("asyncIncrement");
      }, 1000);
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(() => {
        commit("asyncDecrement");
      }, 1000);
    }
  }
});
