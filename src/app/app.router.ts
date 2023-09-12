import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'registration', component: RegistrationComponent },
  {path:'gallery',component: GalleryComponent},
  {path:'contactus',component:ContactusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }