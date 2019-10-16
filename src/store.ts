import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from './store/root-state';
import { rootStateActions } from './store/root-state.actions';
import { rootStateGetters } from './store/root-state.getters';
import { rootStateMutations } from './store/root-state.mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: new RootState(null, null),
  mutations: rootStateMutations,
  actions: rootStateActions,
  getters: rootStateGetters,
});
