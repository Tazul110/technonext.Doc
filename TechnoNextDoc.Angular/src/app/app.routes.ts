import { Routes } from '@angular/router';
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { ContentComponent } from "./pages/contents/content/content.component";
import { LoginComponent } from './pages/auth/login/login.component';
import { Component } from '@angular/core';
import { RegistrationComponent } from './pages/auth/registration/registration.component';

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
  }
];
