export class SmartCabinetUser {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public username: string,
    public email: string,
  ) {}

  public static fromApi(user: any) {
    return new SmartCabinetUser(user.id, user.firstName, user.lastName, user.username, user.email);
  }
}
