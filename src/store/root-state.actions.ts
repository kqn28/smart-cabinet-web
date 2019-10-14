import { UsersService } from '@/services/users.service';
import { CheckUserExistInfo } from 'core/check-user-exist-info';
import { CreateUserInfo } from 'core/create-user-info';
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from './root-state';

export const rootStateActions: ActionTree<RootState, RootState> = {
  async checkUserExist({commit}: ActionContext<RootState, RootState>, userInfo: CheckUserExistInfo) {
    const userExist = await UsersService.checkUserExist(userInfo);
    return userExist;
  },
  async createUser({commit}: ActionContext<RootState, RootState>, userInfo: CreateUserInfo) {
    await UsersService.createUser(userInfo);
  },
};
