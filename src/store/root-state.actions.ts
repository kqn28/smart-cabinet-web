import { UsersService } from '@/services/users.service';
import { ActionContext, ActionTree } from 'vuex';
import { CheckUserExistInfo } from '../../core/user/check-user-exist-info';
import { CreateUserInfo } from '../../core/user/create-user-info';
import { UserLoginInfo } from '../../core/user/user-login-info';
import { RootState } from './root-state';

export const rootStateActions: ActionTree<RootState, RootState> = {
  async checkUserExist({commit}: ActionContext<RootState, RootState>, userInfo: CheckUserExistInfo) {
    return await UsersService.checkUserExist(userInfo);
  },
  async createUser({commit}: ActionContext<RootState, RootState>, userInfo: CreateUserInfo) {
    const user = await UsersService.createUser(userInfo);
    commit('userUpdate', user);
  },
  async getUser({commit}: ActionContext<RootState, RootState>, userInfo: UserLoginInfo) {
    const user = await UsersService.getUser(userInfo);
    commit('userUpdate', user);
  },
};
