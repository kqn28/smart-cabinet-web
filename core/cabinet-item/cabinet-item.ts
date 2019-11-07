export class CabinetItem {
  constructor(
    public id: string | null,
    public name: string,
    public quantity: number,
    public unit: string,
  ) {}

  public static fromApi(item: any) {
    return new CabinetItem(item.id, item.name, item.quantity, item.unit);
  }
  public static arrayFromApi(items: any[]) {
    return items.map((item: any) => CabinetItem.fromApi(item));
  }
}
