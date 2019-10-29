import { MutationTree } from 'vuex';
import { SmartCabinetEnv } from '../../core/server/smart-cabinet-env';
import { SmartCabinetUser } from '../../core/user/smart-cabinet-user';
import { RootState } from './root-state';

export const rootStateMutations: MutationTree<RootState> = {
  userUpdate(state: RootState, user: SmartCabinetUser) {
    state.user = user;
  },
  smartCabinetEnvUpdate(state: RootState, smartCabinetEnv: SmartCabinetEnv) {
    state.smartCabinetEnv = smartCabinetEnv;
  },
};
