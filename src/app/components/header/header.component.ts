import { Component } from '@angular/core';
import { ProfileComponent } from "../../pages/profile/profile.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
