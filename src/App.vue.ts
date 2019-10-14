import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public mounted() {
    document.title = 'Smart Cabinet';
  }
}
