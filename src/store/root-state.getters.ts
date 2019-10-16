import { GetterTree } from 'vuex';
import { RootState } from './root-state';

export const rootStateGetters: GetterTree<RootState, RootState> = {
  getCurrentUser(state: RootState) {
    return state.user;
  },
};
