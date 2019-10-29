import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { CheckUserExistInfo } from '../../../core/user/check-user-exist-info';
import { CreateUserInfo } from '../../../core/user/create-user-info';
import { SmartCabinetUser } from '../../../core/user/smart-cabinet-user';

@Component
export default class CreateAccount extends Vue {
  public isFormValid = false;
  public showError = false;
  public emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public firstName = '';
  public lastName = '';
  public email = '';
  public username = '';
  public password = '';
  public confirmPassword = '';

  @Action('checkUserExist')
  private _checkUserExist!: (checkUserExistInfo: CheckUserExistInfo) => Promise<boolean>;
  @Action('createUser')
  private _createUser!: (createUserInfo: CreateUserInfo) => Promise<void>;
  @Getter('getCurrentUser')
  private _currentUser!: SmartCabinetUser;

  public onTextFieldFocus() {
    this.showError = false;
  }
  public onBackToLoginButtonClick() {
    this.$router.push('/login');
  }
  public async onCreateButtonClick() {
    const form: any = this.$refs.createAccountForm;
    form.validate();
    if (!this.isFormValid) {
      return;
    }
    const checkUserExistInfo = new CheckUserExistInfo(this.username, this.email);
    const userExist = await this._checkUserExist(checkUserExistInfo);
    if (userExist) {
      this.showError = true;
      return;
    }
    const createUserInfo = new CreateUserInfo(this.firstName, this.lastName, this.email, this.username, this.password);
    await this._createUser(createUserInfo);
    this.$router.push(`/${this._currentUser.username}`);
  }
}

