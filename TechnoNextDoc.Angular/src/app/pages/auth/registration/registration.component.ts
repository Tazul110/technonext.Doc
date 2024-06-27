import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../../../shared/form-validators/confirm-password.validator';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../shared/api-services/users/auth.service';
import { registrationModel } from '../../../shared/api-models';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  registrationForm!: FormGroup;
  //dataStatus!: boolean;
  dataStatus: boolean | undefined;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

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

    //console.log("in registration page", this.f)

    if (this.registrationForm.valid) {
      const userRegistration: registrationModel = this.registrationForm.value;

      this.authService.Register(userRegistration).subscribe((response: boolean) => {
        this.dataStatus = response;

        console.log('Registration successful:', this.dataStatus);
      });
    } else {
      console.error('Form is invalid.');
    }
  }
}