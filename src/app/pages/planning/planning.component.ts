import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { PostComponent } from "../../services/post/post.component";

@Component({
  selector: 'app-planning',
  standalone: true,
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.css',
  imports: [
    FormsModule,
    PostComponent
  ]
})
export class PlanningComponent {
  title!: string;
  contents!: string;
  model: any;

  showModel = createBlog();
}

function createBlog() {
  // Date & Time Stamp
  let ts = new Date((new Date()).getTime() + 24 * 60 * 60 * 1000);

  // let blog = <Blog>{};
  return {
  title : '',
  text: '',
  userId : 1, // Britt
  blogRating : 9,
  blogCategoryId : 1, // Planning
  image : '',
  createOn : ts,
  modifiedOn : ts,
  createBy : 1
  }
}

interface Blog {
  title: string;
  text: string;
  userId: number;
  blogRating: number;
  blogCategoryId: number;
  image: string;
  createOn: Date;
  modifiedOn: Date;
  createBy: number;
}
