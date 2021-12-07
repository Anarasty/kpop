"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interfase_worker_1 = require("./interfase-worker");
var UniversityLibrarian_1 = require("./UniversityLibrarian");
var ReferenceItem_1 = require("./ReferenceItem\u0440");
function createCustomer(name, age, city) {
    if (age) {
        return console.log("name: " + name + ", age: " + age);
    }
    if (age && city) {
        return console.log("name: " + name + ", age: " + age + ", city: " + city);
    }
    if (city) {
        return console.log("name: " + name + ", city: " + city);
    }
    return console.log("name: " + name);
}
function createCustomerID(_a) {
    var name = _a.name, id = _a.id;
    return name + " " + id;
}
function getAllWorkers() {
    return [{
            name: 'Ivan',
            surname: 'Ivanov',
            available: true,
            salary: 1000,
            category: interfase_worker_1.Category.Business_analyst,
            id: 1
        },
        { name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: interfase_worker_1.Category.Developer, id: 2 },
        { name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: interfase_worker_1.Category.Designer, id: 3 },
        { name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: interfase_worker_1.Category.Developer, id: 4 }];
}
function getWorkersNamesByCategory(all_workers, category) {
    if (category === void 0) { category = interfase_worker_1.Category.Designer; }
    var workers = [];
    for (var _i = 0, all_workers_1 = all_workers; _i < all_workers_1.length; _i++) {
        var i = all_workers_1[_i];
        if (i.category == category) {
            workers.push(i.surname);
        }
    }
    return workers;
}
function logWorkersNames(log, default_fun) {
    if (default_fun === void 0) { default_fun = getAllWorkers(); }
    for (var _i = 0, log_1 = log; _i < log_1.length; _i++) {
        var i = log_1[_i];
        console.log(i);
    }
}
function getWorkerByID(id, worker) {
    if (worker.id == id) {
        return worker.name + " " + worker.surname + " " + worker.salary;
    }
    return null;
}
function getWorkerBYID(id) {
    var allWorkers = getAllWorkers();
    // const f = allWorkers.find(element => element.id = id)
    var findWorkerById = allWorkers.filter(function (element) { return element.id = id; });
    return findWorkerById[0];
}
function PrintWorker(worker) {
    return worker.name + worker.surname + "got salary" + worker.salary;
}
function CheckOutWorkers(customer, workerIDs) {
    var workers = getAllWorkers();
    var availableWorkers = [];
    for (var _i = 0, workers_1 = workers; _i < workers_1.length; _i++) {
        var i = workers_1[_i];
        for (var _a = 0, workerIDs_1 = workerIDs; _a < workerIDs_1.length; _a++) {
            var j = workerIDs_1[_a];
            if (i.id == j) {
                if (i.available) {
                    availableWorkers.push((getWorkerByID(i.id, i)));
                }
            }
        }
    }
    console.log(customer);
    return availableWorkers;
}
function main() {
    var logPrice = function (str) {
        console.log(str);
    };
    logPrice("5");
    var favoriteAuthor = {
        name: "Egor",
        email: "egor_for_youtube@gmail.com",
        numBooksPublished: 45
    };
    var favoriteLibrarian = {
        name: "Leo",
        email: "LEO_f@gmail.com",
        department: "ДЕТСКАЯ БИБЛИОТЕКА БФ №10",
        assistCustomer: function (custName) {
            console.log(custName);
        }
    };
    var favoriteLibrarian_U = new UniversityLibrarian_1.UniversityLibrarian("Leo", "LEO_f@gmail.com", "Наукова бібліотека ім. М. Максимовича Київського національного університету імені Тараса Шевченка");
    favoriteLibrarian_U.assistCustomer("Ray");
    var ref = new ReferenceItem_1.ReferenceItem("Programming TypeScript: Making Your JavaScript Applications Scale", 2019);
    ref.printItem();
    ref.publisher = "Tom";
    console.log(ref.publisher);
}
main();
