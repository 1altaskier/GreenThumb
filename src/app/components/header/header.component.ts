import { Component } from '@angular/core';
import { BlogsComponent } from "../../pages/blogs/blogs.component";
import { BlogComponent } from "../../pages/blog/blog.component";
import { ProfileComponent } from "../../pages/profile/profile.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BlogsComponent, BlogComponent, ProfileComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
