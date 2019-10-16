import { SmartCabinetEnv } from 'core/server/smart-cabinet-env';
import { SmartCabinetUser } from 'core/smart-cabinet-user';
import { MutationTree } from 'vuex';
import { RootState } from './root-state';

export const rootStateMutations: MutationTree<RootState> = {
  userUpdate(state: RootState, user: SmartCabinetUser) {
    state.user = user;
  },
  smartCabinetEnvUpdate(state: RootState, smartCabinetEnv: SmartCabinetEnv) {
    state.smartCabinetEnv = smartCabinetEnv;
  },
};
