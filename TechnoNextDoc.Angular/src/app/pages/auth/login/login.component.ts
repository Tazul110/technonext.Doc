import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { userModel } from '../../../Models/login.model';
import { NgIf } from '@angular/common';
import { UserService } from '../../../shared/api-services/users/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, NgIf], // Add HttpClientModule to imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;
  data: any;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

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

      this.userService.login(user_LogIn).subscribe(
        (data: any) => {

          this.data = data;
          console.log(data)

        });
    }
  }
}
