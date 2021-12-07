export class User {
    id: string = "";
    name: string = ''
    email: any;
    login: string = ''
    password: string = ''
    cell: string = ''
    isChecked: false;


  constructor (name: string, email: any, login: string, password: string, cell: any,id:string){
        this.name = name
        this.email = email
        this.login = login
        this.password = password
        this.cell = cell
        this.id = id
    }

}
