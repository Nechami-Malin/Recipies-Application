import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import {  ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailPatternValidator = (): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return control.value && !control.value.match(emailRegEx)
      ? { email: 'Invalid email format' }
      : null;
  };
};

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private _userService: UserService,private router:Router) {
  }
  userData = sessionStorage.getItem('userInfo');
  public name!: string;
  public registerForm!: FormGroup;
  ngOnInit(): void {
    if (this.userData) {
      this.name = JSON.parse(this.userData).username;}
      this.registerForm = new FormGroup({
        "name": new FormControl("", [Validators.required, Validators.minLength(2)]),
        "address": new FormControl(""),
        "email": new FormControl("", [Validators.required, emailPatternValidator()]),
        "password": new FormControl("", [Validators.required, Validators.minLength(4)]),
      })
    
  }
  get emailErrorMessage() {
    const emailControl = this.registerForm.get('email');
    if (emailControl?.hasError('email')) {
      return emailControl.getError('email');
    }
    return null;
  }
  register(): void {
    let newUser: User = this.registerForm.value as User; 
    newUser.code=1;// יש להמיר את הערכים לסוג User
    alert("newUser"+newUser.code+newUser.address+newUser.name+newUser.email)
    this._userService.register(newUser).subscribe({
      next: (res) => {
        console.log(res);
            this.router.navigate(['/recipies/all-recipies']);
        
      },
      error: (error) => {
        console.error("לדרמן",error);
      }
    });
    if (this.userData) {
      const userInfo = JSON.parse(this.userData);
      userInfo.password = this.registerForm.get('password')?.value;
      userInfo.username = this.registerForm.get('name')?.value;
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    }
  }
}

