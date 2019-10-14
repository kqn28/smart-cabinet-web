export class CreateUserInfo {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public username: string,
    public password: string,
  ) {}
}
