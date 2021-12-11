export class User {
  name!: string;
  email!: string;
  login!: string;
  password!: string;
  cell!: string;

  constructor(name: string, email: any, login: string, password: string, cell: any) {
    this.name = name
    this.email = email
    this.login = login
    this.password = password
    this.cell = cell

  }
}
