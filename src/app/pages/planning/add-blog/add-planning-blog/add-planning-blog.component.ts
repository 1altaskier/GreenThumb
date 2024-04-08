import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Blog } from "../../../../../shared/models/blog";
import { AddPostComponent } from "../.././../../services/add-post/add-post/add-post.component";



@Component({
  selector: 'app-add-planning-blog',
  standalone: true,
  imports: [FormsModule,
    AddPostComponent,],
    providers: [AddPostComponent],
  templateUrl: './add-planning-blog.component.html',
  styleUrl: './add-planning-blog.component.css'
})
export class AddPlanningBlogComponent {
  title!: string;
  contents!: string;
  

  constructor(private addPostComponent: AddPostComponent) { }

  blog: Blog = {
    title: this.title,
    text: this.contents,
    userId: 1,
    blogRating: 10,
    blogCategoryId: 2,
    image: '',
    createBy: 'Britt Moody'
  }

  PostBlog(){
    this.blog.title = this.title;
    this.blog.text = this.contents;

    this.addPostComponent.PostBlog(this.blog);
  }
}
