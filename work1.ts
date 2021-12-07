`var message = 'Hello';
console.log(message);`

enum Category {
    Business_analyst = 0,
    Developer = 1,
    Designer = 2,
    QA = 3,
    Scrum_master = 4
}

function getAllworkers() {
    let workers = [
    {Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, id: 1, Category:Category[0]},
    {Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, id:2, Category:Category[1]},
    {Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, id:3, Category:Category[2]},
    {Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, id:4, Category:Category[3]}
    ]
    return workers;
    }
    console.log(getAllworkers());


let countElements = getAllworkers();

function logFirstAvailable (countElements) {

    console.log('Number of elements - ' + countElements.length);
    
    for(let z of countElements){
        if (z.available == true){
            console.log(z.Name + '_' + z.surname);
        }
    }

function getWorkersNamesByCategory(category) {
    let countElements = getAllworkers()
    for(let x of countElements){
        if(x.Category == category){
            logWorkersNames('Chosen category person - ' + x.Name + '_'+ x.surname);
        }
    }
}

logWorkersNames(getWorkersNamesByCategory(Category[1]));

function logWorkersNames(data){
    console.log(data);
}


    // let item1 = countElem.filter(i => i.available === true);
    // console.log('dd' + item1);
}
logFirstAvailable(countElements);

function getWorkerByID(id,countElements){
    getAllworkers().forEach(q =>{
        if(q.id == id){
            console.log(q.Name+'_'+q.surname+'_'+q.salary);
        }
    })
}

getWorkerByID(1,countElements)

