import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create Persons list', () => {
    const persons = component.getAllPersons()
    expect(persons).not.toBeDefined()
  });

  it('should init register form values', () => {
    const registerFormGroup = component.registerForm;
    const registerFormValues = {
      name: null,
      email: null,
      password: null,
      confirm_password: null,
      phone: null,
      address: null
    }
    expect(registerFormGroup.value).toEqual(registerFormValues)
  })

  it('registerForm - emailInput should check valid entered user email', () => {
    let email = component.registerForm.controls['email'];
    email.setValue('test@mail.com');
    expect(email.errors).toBeNull();
  })

  it('registerForm - emailInput should check invalid entered user email', () => {
    let email = component.registerForm.controls['email'];

    expect(email.valid).toBeFalsy()
    expect(email.pristine).toBeTruthy()

    expect(email.errors['required']).toBeTruthy()

    email.setValue('invalidInputEmailAddress')
    expect(email.errors['email']).toBeTruthy()

    email.setValue('invalidInputEmailAddress');
    expect(email.errors).toBeTruthy();
  })

  it('registerForm - passwordInput should check valid entered user password', () => {
    let password = component.registerForm.controls['password'];
    password.setValue('Qq12345678');
    expect(password.errors).toBeNull();
    expect(password.valid).toBeTruthy();
  })

  it('registerForm - passwordInput should check invalid entered user password', () => {
    let password = component.registerForm.controls['password'];
    expect(password.errors['required']).toBeTruthy();
    password.setValue('some_invalid_psw');
    expect(password.errors['pattern']).toBeTruthy();
  })

  it('registerForm - confirm_passwordInput should check valid entered user password', () => {
    let password = component.registerForm.controls['confirm_password'];
    password.setValue('Qq12345678');
    expect(password.errors).toBeNull();
    expect(password.valid).toBeTruthy();
  })

  it('registerForm - confirm_passwordInput should check invalid entered password', () => {
    let password = component.registerForm.controls['confirm_password'];
    expect(password.errors['required']).toBeTruthy();
    password.setValue('some_invalid_psw');
    expect(password.errors['pattern']).toBeTruthy();
  })

  it('registerForm - nameInput should check valid entered user name', () => {
    let email = component.registerForm.controls['name'];
    email.setValue('SomeValidName');
    expect(email.errors).toBeNull();
    expect(email.valid).toBeTruthy();
  })

  it('registerForm - nameInput should check invalid entered user name', () => {
    let password = component.registerForm.controls['name'];
    expect(password.errors['required']).toBeTruthy();
    password.setValue('n1');
    expect(password.errors['pattern']).toBeTruthy();
  })

  it('registerForm - phoneInput should check valid entered user phone number', () => {
    let phone = component.registerForm.controls['phone'];
    phone.setValue('+61 2 9999 9999');
    expect(phone.errors).toBeNull();
    expect(phone.valid).toBeTruthy();
  })

  it('registerForm - phoneInput should check invalid entered user phone number', () => {
    let phone = component.registerForm.controls['phone'];
    expect(phone.errors['required']).toBeTruthy();
    phone.setValue('wewewewewe');
    expect(phone.errors['pattern']).toBeTruthy();
  })

  it('registerForm - addressInput should check valid entered user address', () => {
    let address = component.registerForm.controls['address'];
    address.setValue('ABOBUSK');
    expect(address.errors).toBeNull();
    expect(address.valid).toBeTruthy();
  })

  it('registerForm - addressInput should check invalid entered user address', () => {
    let address = component.registerForm.controls['address'];
    expect(address.errors['required']).toBeTruthy();
    address.setValue('qw');
    expect(address.errors['pattern']).toBeTruthy();
  } )



  it('registerForm - form should be invalid with no input values', () => {
    expect(component.registerForm.invalid).not.toBeFalsy();
  })

  it('registerForm - form should be valid with correct input values', () => {
    component.registerForm.controls['email'].setValue('someValid@mail.com');
    component.registerForm.controls['password'].setValue('s0meVal1dPasswor4');

    component.registerForm.controls['phone'].setValue('+99 9 9999 9999');
    component.registerForm.controls['address'].setValue('ABOBUSK');

    component.registerForm.controls['confirm_password'].setValue('s0meVal1dABOBUSPasswor4');
    component.registerForm.controls['name'].setValue('ABOBUS');

    expect(component.registerForm.valid).toBeTruthy();
  })

  it('registerForm - form should be submitted and add user to personsList', () => {
    expect(component.registerForm.valid).toBeFalsy()
    let registerButton = fixture.debugElement.query(By.css('button'))                                                      //[id="reg"]
    expect(registerButton.nativeElement.disabled).toBeTruthy();

    component.registerForm.controls['email'].setValue('someValid@mail.com');
    component.registerForm.controls['password'].setValue('s0meVal1dPasswor4');
    component.registerForm.controls['confirm_password'].setValue('s0meVal1dPasswor4');
    component.registerForm.controls['name'].setValue('SomeValidName');
    component.registerForm.controls['phone'].setValue('+99 9 9999 9999');
    component.registerForm.controls['address'].setValue('ABOBUSK');

    fixture.detectChanges();
    expect(registerButton.nativeElement.disabled).toBeFalsy()

    component.registerUser();
    fixture.detectChanges();

    expect(component.registerForm.value).toEqual({ email: null, phone: null, address: null, password: null, confirm_password: null, name: null })
  })

});
