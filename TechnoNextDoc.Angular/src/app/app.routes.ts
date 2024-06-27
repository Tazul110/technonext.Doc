import { Routes } from '@angular/router';
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { ContentComponent } from "./pages/contents/content/content.component";
import { LoginComponent } from './pages/auth/login/login.component';
import { Component } from '@angular/core';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { ForgetPasswordComponent } from './pages/auth/forget-password/forget-password.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions/terms-and-conditions.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent
  },
  {
    path: 'termsAndConditions',
    component: TermsAndConditionsComponent
  }
];
