import AddItemDialog from '@/components/add-item-dialog/add-item-dialog.vue';
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { CabinetItem } from '../../../core/cabinet-item/cabinet-item';
import { SmartCabinetUser } from '../../../core/user/smart-cabinet-user';
import { CabinetItemsService } from '../../services/cabinet-items.service';

@Component({
  components: {
    AddItemDialog,
  },
})
export default class MainPage extends Vue {
  @Getter('getCurrentUser')
  public currentUser!: SmartCabinetUser;

  public addItemDialogOpen = false;
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
  public cabinetItems: CabinetItem[] = [];
  public errorMessage: string | null = null;

  public async created() {
    if (this.currentUser === null) {
      this.$router.push('/login');
    }
    try {
      const items = await CabinetItemsService.getItems(this.currentUser.id);
      this.cabinetItems = items;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  public onErrorFade() {
    this.errorMessage = null;
  }
  public onAddItemDialogClose() {
    this.addItemDialogOpen = false;
  }
  public async onAddItemDialogSave(newItem: CabinetItem) {
    try {
      const existingItemIndex = this.cabinetItems.findIndex((item: CabinetItem) => item.name === newItem.name);
      if (existingItemIndex >= 0) {
        throw new Error('Item already exists');
      }
      const items = await CabinetItemsService.addItem(this.currentUser.id, newItem);
      this.cabinetItems = items;
      this.addItemDialogOpen = false;
    } catch (error) {
      this.errorMessage = error.message;
    }
  }
}
