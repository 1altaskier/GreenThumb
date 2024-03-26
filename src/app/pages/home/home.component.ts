import { Component } from '@angular/core';

import { BlogsComponent } from "../../pages/blogs/blogs.component";
import { BlogComponent } from "../../pages/blog/blog.component";
import { ProfileComponent } from "../../pages/profile/profile.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BlogsComponent,
    BlogComponent,
    ProfileComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string = 'GreenThumb Chronicles';
}
