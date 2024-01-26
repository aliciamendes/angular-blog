import { Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  {
    path: 'content/:id',
    component: ContentComponent,
    title: 'Content',
  },
];
