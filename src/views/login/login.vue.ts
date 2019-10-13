import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  public onCreateAccountButtonClick() {
    this.$router.push('/createAccount');
  }
}

