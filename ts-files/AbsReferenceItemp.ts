abstract class _AbsReferenceItem_{
    // title: string
    // year: number
     _publisher: string
     department: string = "Науково-технічна бібліотека ім. Г. І. Денисенка КПІ ім. Ігоря Сікорського"

    // constructor(newTitle: string, newYear: number) {
    //     this.year = newYear
    //     this.title = newTitle
    //     console.log("'Creating a new ReferenceItem ...")
    // }

    constructor(public readonly title: string, protected readonly year: number) {
    }
    printItem(): void{
        console.log(`The ${this.title} was published in ${this.year} department ${this.department}`)
    }

    get publisher(): string{
        return this._publisher.toUpperCase()
    }
    set publisher(publisher: string){
        this._publisher = publisher
    }
}

export {_AbsReferenceItem_}