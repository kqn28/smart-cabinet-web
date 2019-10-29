import axios from 'axios';
import { CabinetItem } from '../../core/cabinet-item/cabinet-item';

export class CabinetItemsService {
  public static async addItem(userId: string, item: CabinetItem) {
    const response = await axios.post('api/CabinetItems/AddItem', { userId, item });
    return CabinetItem.arrayFromApi(response.data.items);
  }
}
