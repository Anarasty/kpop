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

export {Author, Librarian}