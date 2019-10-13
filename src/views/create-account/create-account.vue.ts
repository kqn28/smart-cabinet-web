import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CreateAccount extends Vue {
  public onBackToLoginButtonClick() {
    this.$router.push('/login');
  }
}

