import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { registrationModel } from '../../../Models/registration.model';
import { confirmPasswordValidator } from '../../../shared/form-validators/confirm-password.validator';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(2)]]
    }, {
      validator: confirmPasswordValidator('password', 'confirmPassword')
    });
  }

  get f(): any {
    return this.registrationForm.controls;
  }


  registration() {
    console.log("in registration page", this.f)

    if (this.registrationForm.valid) {
      const { confirmPassword, ...userRegistration } = this.registrationForm.getRawValue();

      console.log(userRegistration)
    }

  }
}