import {ReferenceItem} from "./ReferenceItemр";
import {_AbsReferenceItem_} from "./AbsReferenceItemp";

class Encyclopedia extends  ReferenceItem{
    constructor(public readonly title: string, year: number, readonly edition: number | string ) {
        super(title, year);
    }
    printItem(){
        console.log(`The ${this.title} was published in ${this.year} department ${ReferenceItem.department} `)
        console.log("Edition: edition"+ this.year)
    }
}

function main(){
    let refBook = new Encyclopedia("Encyclopedia of Dinosaurs", 2020, "The Sauropods")

}
class _Encyclopedia extends _AbsReferenceItem_{
    constructor(public readonly title: string, year: number, readonly edition: number | string ) {
        super(title, year);
    }
    printItem(){
        console.log(`The ${this.title} was published in ${this.year} department ${ReferenceItem.department} `)
        console.log("Edition: edition"+ this.year)
    }
}
