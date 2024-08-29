import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { LoginComponent } from './login/login.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [{
  //as if you write some thing after home it also will redirect you to home
  path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[authGuard]},
  {path:'about',component:AboutMeComponent},
  {path:'skills',component:SkillsComponent},
  {path:'login',component:LoginComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'courses',component:CoursesComponent},
  {path:'contact',component:ContactMeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
// import { ContactMeComponent } from './contact-me/contact-me.component';

exports: [RouterModule]
})
export class AppRoutingModule { }
