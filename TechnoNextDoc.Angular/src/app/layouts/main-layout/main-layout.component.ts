import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NavberComponent} from "../navber/navber.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NavberComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
