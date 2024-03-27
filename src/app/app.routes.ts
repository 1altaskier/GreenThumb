import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CareMaintComponent } from './pages/care-maint/care-maint.component';
import { HarvestingComponent } from './pages/harvesting/harvesting.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { PlantingComponent } from './pages/planting/planting.component';
import { DataService  } from './data/data.service';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
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
    },
    {
        path: 'data-service',
        component: DataService
    }
];
