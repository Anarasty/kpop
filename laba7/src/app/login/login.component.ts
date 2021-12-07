import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../../model/person";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup | any;

  public persons: Person[] | undefined;

  constructor() {
  }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      'email': new FormControl(null, [Validators.required,
        Validators.email],
      ),
      'password': new FormControl(null,
        [Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]),
      'name': new FormControl(null, [Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]{3,255}$')]
      ),
      'confirm_password': new FormControl(null, [Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]
      ),
      'phone' : new FormControl(null, [Validators.required,
        Validators.pattern('[- +()0-9]+')]),
      'address' : new FormControl(null, [Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]{3,255}$')])
    });
    this.getAllPersons()
  }



  public registerUser(): void {
    let person: Person = this.registerForm.value
    console.log(this.registerForm.value)
    this.registerForm.reset();
    this.persons?.push(person)
  }

  getAllPersons(): Person[] | undefined {
    return this.persons
  }


}
