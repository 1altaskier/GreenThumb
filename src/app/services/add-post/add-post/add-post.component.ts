import { Injectable } from '@angular/core';
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from "../../../../shared/models/blog";

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {

  http = inject(HttpClient);
  posts: any = [];

  public PostBlog(blog: Blog) {
    this.http.post('https://localhost:7211/api/Blogs', blog)
      .subscribe((posts: any) => {
        console.log(posts);
        this.posts = posts;
      });
  }

}
