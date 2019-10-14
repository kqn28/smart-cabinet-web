import axios from 'axios';
import { CheckUserExistInfo } from 'core/check-user-exist-info';
import { CreateUserInfo } from '../../core/create-user-info';

export class UsersService {
  public static async checkUserExist(userInfo: CheckUserExistInfo): Promise<boolean> {
    const result = await axios.get(`api/Users/CheckUserExist?username=${userInfo.username}&email=${userInfo.email}`);
    return result.data.users__check_user_exist;
  }
  public static async createUser(userInfo: CreateUserInfo) {
    await axios.post('api/Users/CreateUser', userInfo);
  }
}
