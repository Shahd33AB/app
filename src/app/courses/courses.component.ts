import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent  implements OnInit {

  courses: any[] = []; 
  constructor(private dashboardService: DashboardService) { } 

  ngOnInit(): void {
    this.loadCourses(); 
  }


 loadCourses():void{
  this.dashboardService.getCourses().subscribe(data => {
    this.courses = data;
  });
 }


 
}
