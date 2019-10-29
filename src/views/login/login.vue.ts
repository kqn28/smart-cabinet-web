import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { SmartCabinetUser } from '../../../core/user/smart-cabinet-user';
import { UserLoginInfo } from '../../../core/user/user-login-info';

@Component
export default class Login extends Vue {
  public errorMessage: string | null = null;

  public username = '';
  public password = '';

  @Action('getUser')
  private _getUser!: (userLoginInfo: UserLoginInfo) => Promise<void>;
  @Getter('getCurrentUser')
  private _currentUser!: SmartCabinetUser;

  public onCreateAccountButtonClick() {
    this.$router.push('/createAccount');
  }
  public onTextFieldFocus() {
    this.errorMessage = null;
  }
  public async onLoginButtonClick() {
    try {
      const userLoginInfo = new UserLoginInfo(this.username, this.password);
      await this._getUser(userLoginInfo);
      this.$router.push(`/${this._currentUser.username}`);
    } catch (error) {
      this.errorMessage = error.message;
    }
  }
}

