import axios from 'axios';
import { CabinetItem } from '../../core/cabinet-item/cabinet-item';

export class CabinetItemsService {
  public static async addItem(userId: string, item: CabinetItem) {
    const response = await axios.post('api/CabinetItems/AddItem', { userId, item });
    return CabinetItem.arrayFromApi(response.data.items);
  }
  public static async getItems(userId: string) {
    const response = await axios.get('api/CabinetItems/GetItems', {params: {userId}});
    return CabinetItem.arrayFromApi(response.data.items);
  }
  public static async deleteItem(userId: string, itemId: string) {
    const response = await axios.get('api/CabinetItems/DeleteItem', {params: {userId, itemId}});
    return CabinetItem.arrayFromApi(response.data.items);
  }
}
