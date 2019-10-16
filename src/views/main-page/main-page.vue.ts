import { SmartCabinetUser } from 'core/smart-cabinet-user';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class MainPage extends Vue {
  @Getter('getCurrentUser')
  public currentUser!: SmartCabinetUser;

}
