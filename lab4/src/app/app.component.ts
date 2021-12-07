import { Component } from '@angular/core';
import { StudentList} from  "./lab4/lab4.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listStudent: StudentList[] = []

  mark: number=0
  student: string = '0'

  average(){
    this.listStudent.push({
      mark: this.mark,
      name: this.student
    })
  }
}
