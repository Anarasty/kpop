import {worker, Category} from "./interfase-worker";
import {PrizeLogger} from "./PrizeLogger";
import {Author, Librarian} from "./Person";
import {UniversityLibrarian} from "./UniversityLibrarian";
import {ReferenceItem} from "./ReferenceItemр";

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

function main(): void {
    let logPrice: PrizeLogger = function (str): void {
        console.log(str)
    }
    logPrice("5")

    let favoriteAuthor: Author = {
        name: "Egor",
        email: "egor_for_youtube@gmail.com",
        numBooksPublished: 45
    }
    let favoriteLibrarian: Librarian = {
        name: "Leo",
        email: "LEO_f@gmail.com",
        department: "ДЕТСКАЯ БИБЛИОТЕКА БФ №10",
        assistCustomer(custName: string): void {
            console.log(custName)
        }
    }
    let favoriteLibrarian_U: Librarian = new UniversityLibrarian("Leo", "LEO_f@gmail.com", "Наукова бібліотека ім. М. Максимовича Київського національного університету імені Тараса Шевченка")
    favoriteLibrarian_U.assistCustomer("Ray")

    let ref : ReferenceItem = new ReferenceItem("Programming TypeScript: Making Your JavaScript Applications Scale", 2019)
    ref.printItem()
    ref.publisher = "Tom"
    console.log(ref.publisher)
}

main()