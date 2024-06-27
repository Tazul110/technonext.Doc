import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from '../../../Models/login.model';
import { NgIf } from '@angular/common';
import { UserService } from '../../../shared/api-services/users/user.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, private UserService: UserService) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  get f(): any {
    return this.signInForm.controls;
  }



  createAccount() {
    console.log("in create account");
    this.router.navigate(['/registration']); // Update with your desired route
  }
  signIn() {
    if (this.signInForm.valid) {
      const user_LogIn: userModel = this.signInForm.value;
      console.log(user_LogIn);

    }
    else {
      alert("email or passord ocured error");
    }

  }
}
