import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.router'; // Import your routing module

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CountryComponent } from './country/country.component';


import { RegistrationComponent } from './registration/registration.component';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CountryComponent,
    
    
    RegistrationComponent,
         ContentComponent,
         HomeComponent,
         GalleryComponent,
         ContactusComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    
  

  
  ],
  providers: [],
  bootstrap: [AppComponent],


  
    

  
})
export class AppModule { }
