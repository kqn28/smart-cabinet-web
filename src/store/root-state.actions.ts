import { UsersService } from '@/services/users.service';
import { CheckUserExistInfo } from 'core/check-user-exist-info';
import { CreateUserInfo } from 'core/create-user-info';
import { UserLoginInfo } from 'core/user-login-info';
import { ActionContext, ActionTree } from 'vuex';
import { RootState } from './root-state';

export const rootStateActions: ActionTree<RootState, RootState> = {
  async checkUserExist({commit}: ActionContext<RootState, RootState>, userInfo: CheckUserExistInfo) {
    return await UsersService.checkUserExist(userInfo);
  },
  async createUser({commit}: ActionContext<RootState, RootState>, userInfo: CreateUserInfo) {
    await UsersService.createUser(userInfo);
  },
  async getUser({commit}: ActionContext<RootState, RootState>, userInfo: UserLoginInfo) {
    const user = await UsersService.getUser(userInfo);
    commit('userUpdate', user);
  },
};
