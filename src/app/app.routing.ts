import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './screens/home/home.component';
import { VideoComponent } from './screens/video/video.component';

const appRoutes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'video/:id', component: VideoComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRouting { }