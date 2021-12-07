import { Component, Input, OnInit } from '@angular/core';

export interface StudentList{
  name: string;
  mark: number;
}

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css']
})
export class Lab4Component{

  @Input() test: number = 0

  @Input() elements: StudentList[] = []
  sum: number =  0;
  averr: number = 0;

  countAverage(){
  for (let item of this.elements ){ 
    console.log(this.elements.length)
    this.sum = (Number(item.mark) + Number(this.sum))
  
  }
  this.averr = (this.sum / this.elements.length)
  }
}