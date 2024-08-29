import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projects: any[] = []; 
  

  constructor(private dashboardService: DashboardService) { } 

  ngOnInit(): void {
    this.loadProjects(); 
  }


 loadProjects():void{
  this.dashboardService.getProjects().subscribe(data => {
    this.projects = data;
  });
 }


}
