import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { CabinetItem } from '../../../core/cabinet-item/cabinet-item';

@Component
export default class AddItemDialog extends Vue {
  @Prop(Boolean)
  public readonly dialogOpen!: boolean;
  @Prop(String)
  public errorMessage: string | null = null;

  public isFormValid = false;

  public itemName = '';
  public quantity = 0;
  public unit = '';

  public onTextFieldFocus() {
    this.$emit('fadeError');
  }
  public onCloseButtonClick() {
    this.$emit('close');
    const form: any = this.$refs.addItemForm;
    form.reset();
  }
  public onSaveButtonClick() {
    const form: any = this.$refs.addItemForm;
    form.validate();
    if (!this.isFormValid) {
      return;
    }
    this.$emit('save', new CabinetItem(this.itemName, this.quantity, this.unit));
    form.reset();
  }
}
