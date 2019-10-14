import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from './store/root-state';
import { rootStateActions } from './store/root-state.actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new RootState(null),
  mutations: {

  },
  actions: rootStateActions,
});
