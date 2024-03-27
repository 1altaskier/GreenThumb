import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { ProfileComponent } from "../../pages/profile/profile.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProfileComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string = 'GreenThumb Chronicles';
}
