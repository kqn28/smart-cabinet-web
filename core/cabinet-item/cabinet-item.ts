export class CabinetItem {
  constructor(
    public name: string,
    public quantity: number,
    public unit: string,
  ) {}

  public static fromApi(item: any) {
    return new CabinetItem(item.name, item.quantity, item.unit);
  }
  public static arrayFromApi(items: any[]) {
    return items.map((item: any) => CabinetItem.fromApi(item));
  }
}
