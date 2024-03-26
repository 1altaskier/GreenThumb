import { Routes } from '@angular/router';

import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { CareMaintComponent } from './pages/care-maint/care-maint.component';
import { HarvestingComponent } from './pages/harvesting/harvesting.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { PlantingComponent } from './pages/planting/planting.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'blogs',
        component: BlogsComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'care-maint',
        component: CareMaintComponent
    },
    {
        path: 'harvesting',
        component: HarvestingComponent
    },
    {
        path: 'planning',
        component: PlanningComponent
    },
    {
        path: 'planting',
        component: PlantingComponent
    }
];
