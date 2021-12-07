import {PrizeLogger} from "./PrizeLogger";

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
export {worker, Category}
