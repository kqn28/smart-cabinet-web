import { SmartCabinetUser } from 'core/smart-cabinet-user';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class MainPage extends Vue {
  @Getter('getCurrentUser')
  public currentUser!: SmartCabinetUser;

  public headers = [
    {
      text: 'Item Name',
      value: 'name',
    },
    {
      text: 'Quantity',
      value: 'quantity',
    },
    {
      text: 'Unit',
      value: 'unit',
    },
  ];

  public mounted() {
    if (this.currentUser === null) {
      this.$router.push('/login');
    }
  }
}
