import axios from 'axios';
import { CheckUserExistInfo } from 'core/user/check-user-exist-info';
import { CreateUserInfo } from '../../core/user/create-user-info';
import { SmartCabinetUser } from '../../core/user/smart-cabinet-user';
import { UserLoginInfo } from '../../core/user/user-login-info';

export class UsersService {
  public static async checkUserExist(userInfo: CheckUserExistInfo): Promise<boolean> {
    const response = await axios.get(`api/Users/CheckUserExist?username=${userInfo.username}&email=${userInfo.email}`);
    return response.data.userExist;
  }
  public static async createUser(userInfo: CreateUserInfo) {
    const response = await axios.post('api/Users/CreateUser', userInfo);
    return SmartCabinetUser.fromApi(response.data.user);
  }
  public static async getUser(userInfo: UserLoginInfo) {
    const response = await axios.post('api/Users/GetUser', userInfo);
    if (response.data.invalidPassword) {
      throw new Error('Wrong password. Please try again');
    } else if (response.data.noUserExist) {
      throw new Error('User does not exist. Please create a new account');
    } else {
      return SmartCabinetUser.fromApi(response.data.user);
    }
  }
}
