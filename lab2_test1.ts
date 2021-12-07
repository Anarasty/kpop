
interface Person {
    name: string
    email: string
}

interface Author extends Person {
    numBooksPublished: number
}

interface Librarian extends Person {
    department: string

    assistCustomer(custName: string): void
}


interface PrizeLogger{
    (str: string): void
}


enum Category {
    Business_analyst,
    Developer,
    Designer,
    QA,
    Scrum_master
}

interface worker{
    id: number
    name: string
    surname: string
    available: boolean
    salary: number
    category: Category
    _markPrize?: PrizeLogger
}

abstract class AbstractReferenceItem{
    
     _publisher: string
     department: string = "Lib №47"

    constructor(public readonly title: string, protected readonly year: number) {
    }
    printItem(): void{
        console.log(`Book -  ${this.title} pub. year -  ${this.year} library -  ${ReferenceItem.department} `)
    }

    get publisher(): string{
        return this._publisher.toUpperCase()
    }
    set publisher(publisher: string){
        this._publisher = publisher
    }
}

class ReferenceItem {
    
    private _publisher: string
    static department: string = "Lib № 129"

    constructor(public readonly title: string, protected readonly year: number) {
    }

    printItem(): void {
        console.log(`Book -  ${this.title} pub. year -  ${this.year} library -  ${ReferenceItem.department} `)
    }

    get publisher(): string {
        return this._publisher.toUpperCase()
    }

    set publisher(publisher: string) {
        this._publisher = publisher
    }
}


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
        console.log(`Person name - ${this.name} assistCustomer ---> ${custName}.`)
    }
}

class Encyclopedia extends  ReferenceItem{
    constructor(public readonly title: string, year: number, readonly edition: number | string ) {
        super(title, year);
    }
    printItem(){
        console.log(`Book -  ${this.title} pub. year -  ${this.year} library -  ${ReferenceItem.department} `)
        console.log("Edition: edition"+ this.year)
    }
}

function main1(){
    let refBook = new Encyclopedia("Encyclopedia of Dinosaurs", 2020, "The Sauropods")

}
class Encyclopedia2 extends AbstractReferenceItem{
    constructor(public readonly title: string, year: number, readonly edition: number | string ) {
        super(title, year);
    }
    printItem(){
        console.log(`Book -  ${this.title} pub. year -  ${this.year} library -  ${ReferenceItem.department} `)
        console.log("Edition: edition"+ this.year)
    }
}



function main(): void {
    let logPrice: PrizeLogger = function (str): void {
        console.log(str)
    }
    logPrice("800")

    let favoriteAuthor: Author = {
        name: "Joanne Rowling",
        email: "joanne_rowling1@yahoo.com",
        numBooksPublished: 90
    }
    console.log (favoriteAuthor)
    

    let favoriteLibrarian: Librarian = {
        name: "Michael Austin",
        email: "1michael_austin@yahoo.com",
        department: "Library №4",
        assistCustomer(custName: string): void {
            console.log(custName)
        }
    }

    
    let favoriteLibrarian_U: Librarian = new UniversityLibrarian("Michael Austin", "1michael_austin@yahoo.com", "Library of Mr.Green")
    favoriteLibrarian_U.assistCustomer("Jack")

    let ref : ReferenceItem = new ReferenceItem("THE ADVENTURES OF TOM SAWYER ", 2019)
    ref.printItem()
    ref.publisher = "Tom"
    console.log(ref.publisher)
}

main()


function createCustomer(name: string, age?: number, city?: string): void {
    if (age) {
        return console.log(`name: ${name}, age: ${age}`)
    }
    if (age && city) {
        return console.log(`name: ${name}, age: ${age}, city: ${city}`)
    }
    if (city) {
        return console.log(`name: ${name}, city: ${city}`)
    }
    return console.log(`name: ${name}`)
}

function createCustomerID({name, id}: { name: string, id: number }): string {
    return name + " " + id;
}


function getAllWorkers(): worker[] {
    return [{
        name: 'Ivan',
        surname: 'Ivanov',
        available: true,
        salary: 1000,
        category: Category.Business_analyst,
        id: 1
    },
        {name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: Category.Developer, id: 2},
        {name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: Category.Designer, id: 3},
        {name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: Category.Developer, id: 4}]
}

function getWorkersNamesByCategory(all_workers: { Name: string, surname: string, available: boolean, salary: number, category: Category }[], category = Category.Designer): string[] {
    let workers: string[] = [];
    for (let i of all_workers) {
        if (i.category == category) {
            workers.push(i.surname)
        }
    }
    return workers


}

function logWorkersNames(log: string[], default_fun = getAllWorkers()): void {
    for (let i of log) {
        console.log(i)
    }
}

function getWorkerByID(id: number, worker: { name: string, surname: string, available: boolean, salary: number, category: Category, id: number } | worker): string {
    if (worker.id == id) {
        return worker.name + " " + worker.surname + " " + worker.salary
    }
    return null
}

function getWorkerBYID(id: number): worker {
    const allWorkers = getAllWorkers()
    // const f = allWorkers.find(element => element.id = id)
    const findWorkerById = allWorkers.filter(element => element.id = id)
    return findWorkerById[0]
}

function PrintWorker(worker: worker): string {
    return worker.name + worker.surname + "got salary" + worker.salary
}

function CheckOutWorkers(customer: string, workerIDs: number []): string[] {
    let workers = getAllWorkers()
    let availableWorkers: string[] = [];
    for (let i of workers) {
        for (let j of workerIDs) {
            if (i.id == j) {
                if (i.available) {
                    availableWorkers.push((getWorkerByID(i.id, i)))

                }
            }
        }
    }
    console.log(customer)
    return availableWorkers

}
