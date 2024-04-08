import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostComponent } from "../../../../services/post/post.component";

@Component({
  selector: 'app-display-planning-blog',
  standalone: true,
  imports: [FormsModule,
    PostComponent],
  templateUrl: './display-planning-blog.component.html',
  styleUrl: './display-planning-blog.component.css'
})
export class DisplayPlanningBlogComponent {

}
