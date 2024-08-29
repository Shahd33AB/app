import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';


import { provideHttpClient } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{AboutMeComponent}from'./about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CoursesComponent } from './courses/courses.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard.service';
import { HomeComponent } from './home/home.component';
import { CourseChildComponent } from './courses/course-child/course-child.component';
import { SkillChildComponent } from './skills/skill-child/skill-child.component';
import { ProjectChildComponent } from './projects/project-child/project-child.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
   
    
  
    LoginComponent,
   

   
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    CoursesComponent,
   
    DashboardComponent,
    HomeComponent,
    CourseChildComponent,
    SkillChildComponent,
    ProjectChildComponent,
    ContactMeComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    //RouterModule
  ],
  providers: [
    provideClientHydration(),
  provideHttpClient(),
  DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
