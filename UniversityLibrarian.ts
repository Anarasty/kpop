import {Librarian} from "./Person";

class UniversityLibrarian implements Librarian{
    readonly name: string
    readonly email: string
    readonly department: string


    constructor(name: string, email: string, department: string) {
        this.name = name
        this.email = email
        this.department = department
    }
    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}.`)
    }
}
export {UniversityLibrarian}