import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { NgIf } from '@angular/common';
import { UserLoginRequest, UserResponse } from '../../../shared/api-models';
import { AuthService } from '../../../shared/api-services/users/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, NgIf], // Add HttpClientModule to imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;
  data: UserResponse | undefined;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get f(): any {
    return this.signInForm.controls;
  }



  signIn() {
    if (this.signInForm.valid) {

      const userLogIn: UserLoginRequest = this.signInForm.value;

      this.authService.Login(userLogIn).subscribe((response: UserResponse) => {
        this.data = response;
        console.log('Login successful:', response);
      });

    } else {
      console.error('Form is invalid.');
    }
  }
}