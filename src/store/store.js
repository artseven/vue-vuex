import Vue from "vue";
import Vuex from "vuex";
import counter from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
		value: 0
  },
  getters: {

		value: state => {
			return state.value;
		}
  },
  mutations: {

		updateValue: (state, payload) => {
			state.value = payload;
		}
  },
  actions: {
    // increment: context => {
    // 	context.commit('increment');

    // }
    //es5 version
    //vs
    //es6 version

		updateValue: ({commit}, payload) => {
			commit('updateValue', payload);
		}

	},
	modules: {
		counter
	}
});
