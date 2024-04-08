import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { PostComponent } from "../../services/post/post.component";
import { Blog } from "../../../shared/models/blog";
import { DisplayPlanningBlogComponent } from "./display-blog/display-planning-blog/display-planning-blog.component";
import { AddPlanningBlogComponent } from "./add-blog/add-planning-blog/add-planning-blog.component";
import { AddPostComponent } from "../../services/add-post/add-post/add-post.component";

@Component({
    selector: 'app-planning',
    standalone: true,
    templateUrl: './planning.component.html',
    styleUrl: './planning.component.css',
    imports: [
        FormsModule,
        PostComponent,
        DisplayPlanningBlogComponent,
        AddPlanningBlogComponent,
        AddPostComponent,
        CommonModule
    ]
})
export class PlanningComponent {
startBlog: boolean | undefined;
    
}
